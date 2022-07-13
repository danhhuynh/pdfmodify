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
    { $limit: 1 },
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
    if (leads.length === 0) {
      console.log("No Data");
      process.exit();
    }
    let lead = leads[0];
    let promiseStore = [];
    console.log(lead);
    let documents = lead["documents"];
    let lead_id = lead["_id"].toString();
    let path = process.env.STORAGE_PATH + lead_id;
    let writeStream = "";
    //documents of lead
    documents.forEach((ele) => {
      if (lead["defer_info"] && lead["defer_info"]["version"]) {
        if (ele.version !== lead["defer_info"]["version"]) {
          return;
        }
      }
      let file_out =
        path + "/" + ele["code"] + "_" + lead["_id"].toString() + ".pdf";
      const doc = new PDFDocument({
        margin: 5,
      });
      console.log(file_out);
      writeStream = fs.createWriteStream(file_out);
      doc.pipe(writeStream);
      ele["file_path"].forEach((file) => {
        let filePath = path + "/" + file;
        if (!fs.existsSync(filePath)) {
          return;
        }
        doc.image(filePath, {
          fit: [600, 600],
          align: "center",
          valign: "center",
        });
        if (file !== ele["file_path"][ele["file_path"].length - 1]) {
          doc.addPage();
        }
      });
      doc.end();
      let mypromise = new Promise((resovle) => {
        DocLeadMafc.updateOne(
          { _id: ele["_id"] },
          { pdf_path: file_out },
          (err, writeOpResult) => {
            if (err) {
              console.log(err);
            }
            resovle(file_out + "-Done");
          }
        );
      });
      promiseStore.push(mypromise);
    });
    //end documents of lead
    Promise.all(promiseStore).then((values) => {
      console.log(values);
      LeadMafc.updateOne(
        { _id: lead_id },
        { status_convert: STATUS["CONVERT_IMG_PDF_COMPLETE"] },
        (err, writeOpResult) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log({ message: "Successfully Updated" });
          function endProcess() {
            process.exit(1);
          }
          setTimeout(endProcess, 3000);
        }
      );
    });
  },
  (err) => {}
);
