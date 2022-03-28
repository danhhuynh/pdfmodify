import { createRequire } from "module";
const require = createRequire(import.meta.url);
var mongoose = require("mongoose");
var fs = require("fs");
const PDFDocument = require("pdfkit");
require("dotenv").config();
import { STATUS } from "./config/constant.js";
import { systemFields } from "./constant/system_fields.js";
import LeadMafc from "./models/leadMafc.js";
import DocLeadMafc from "./models/documentMafc.js";

mongoose.connect(process.env.MONGODB_URI);
const getLeadMAFC = new Promise((resolve, reject) => {
  LeadMafc.aggregate([
    { $match: { status_convert: STATUS["CONVERT_IMG_PDF"] } },
    { $addFields: { lead_id: { $toString: "$_id" } } },
    {
      $lookup: {
        from: "DocumentMafc",
        localField: "lead_id",
        foreignField: "lead_id",
        as: "documents",
        pipeline: [
          {
            $match: {
              file_type: "pdf",
              file_path: { $exists: true, $ne: [] },
              code: { $ne: "DN" },
            },
          },
          {
            $project: systemFields,
          },
        ],
      },
    },
    {
      $project: {
        ...systemFields,
        submitS37_result: 0,
        result_checking_customer: 0,
        pollingS37_result: 0,
      },
    },
  ]).exec((err, lead) => {
    if (err) {
      console.log(err);
      return;
    }
    resolve(lead);
  });
}).catch((err) => console.log(err));

getLeadMAFC.then(
  (leads) => {
    leads.forEach((lead) => {
      let documents = lead["documents"];
      let lead_id = lead["_id"].toString();
      let path = process.env.STORAGE_PATH + lead_id;
      let writeStream = "";
      //documents of lead
      documents.forEach((ele) => {
        let file_out = path + "/" + ele["code"] + "_" + lead["app_id"] + ".pdf";
        const doc = new PDFDocument();
        console.log(file_out);
        writeStream = fs.createWriteStream(file_out);
        doc.pipe(writeStream);
        ele["file_path"].forEach((file) => {
          let filePath = path + "/" + file;
          doc.image(filePath, {
            fit: [500, 500],
            align: "center",
            valign: "center",
          });
          if (file !== ele["file_path"][ele["file_path"].length - 1]) {
            doc.addPage();
          }
        });
        doc.end();
        DocLeadMafc.updateOne(
          { _id: ele["_id"] },
          { pdf_path: file_out },
          (err, writeOpResult) => {
            if (err) {
              console.log(err);
            }
            console.log(writeOpResult);
          }
        );
      });
      //end documents of lead
      LeadMafc.updateOne(
        { _id: lead_id },
        { status_convert: STATUS["CONVERT_IMG_PDF_COMPLETE"] },
        (err, writeOpResult) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log({ message: "Successfully Updated" });
        }
      );
    });
  },
  (err) => {}
);

// process.exit(1);
