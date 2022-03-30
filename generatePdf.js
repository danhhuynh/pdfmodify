import PdfDrawing from "./pdfDrawing.js";
import { createRequire } from "module";
import { STATUS } from "./config/constant.js";
const require = createRequire(import.meta.url);
var fs = require("fs");
require("dotenv").config();

import LeadMafc from "./models/leadMafc.js";
import DocLeadMafc from "./models/documentMafc.js";
import { systemFields } from "./constant/system_fields.js";

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const getLeadMAFC = new Promise((resolve, reject) => {
  LeadMafc.aggregate([
    {
      $match: {
        status_render: STATUS["RENDER_ACCA"],
        updated_at: { $lte: new Date(Date.now() - 1000 * 60 * 2) },
      },
    },
    { $addFields: { customer_obj_id: { $toObjectId: "$customer_id" } } },
    {
      $lookup: {
        from: "Customer",
        localField: "customer_obj_id",
        foreignField: "_id",
        as: "customer",
        pipeline: [{ $project: systemFields }],
      },
    },
    { $project: systemFields },
  ]).exec((err, lead) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(lead);
    resolve(lead);
  });
});
try {
  getLeadMAFC.then(
    (leads) => {
      leads.forEach((lead) => {
        lead["customer"] = lead["customer"][0];
        drawPdf(lead);
      });
    },
    (err) => {
      throw err;
    }
  );
} catch (error) {
  console.log(error);
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function drawPdf(lead) {
  let dir = process.env.STORAGE_PATH;
  let template = process.env.TEMPLATE_PATH;
  let pdfDrawing = new PdfDrawing(lead);
  let file_name = "DN_" + lead["customer"]["cccd"] + ".pdf";
  let pathFile = dir + lead["_id"] + "/" + file_name;
  let version = lead["defer_info"] ? lead["defer_info"]["version"] : null;

  await pdfDrawing.init(template);
  pdfDrawing.startDraw();
  await delay(2000);

  if (!fs.existsSync(dir + lead["_id"])) {
    fs.mkdirSync(dir + lead["_id"]);
  }
  await pdfDrawing.exportToDir(pathFile);
  DocLeadMafc.updateOne(
    { lead_id: lead["_id"], code: "DN", version: version },
    { file_path: [file_name] },
    (err, writeOpResult) => {
      console.log(writeOpResult);
      LeadMafc.updateOne(
        { _id: lead["_id"] },
        { status_render: STATUS["RENDER_ACCA_COMPLETE"] },
        (err, writeOpResult) => {
          if (err) {
            res.send(err);
            return;
          }
          console.log(writeOpResult);
          console.log({ message: "Successfully Updated" });
        }
      );
    }
  );
}