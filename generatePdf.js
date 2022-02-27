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
    { $match: { status: STATUS["RENDER_ACCA"] } },
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
    resolve(lead);
  });
});

getLeadMAFC.then(
  (leads) => {
    leads.forEach((lead) => {
      lead["customer"] = lead["customer"][0];
      drawPdf(lead);
    });
  },
  (err) => {}
);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function drawPdf(document) {
  let dir = process.env.STORAGE_PATH;
  let template = process.env.TEMPLATE_PATH;
  let pdfDrawing = new PdfDrawing(document);

  await pdfDrawing.init(template);
  pdfDrawing.startDraw();
  await delay(2000);
  let file_name = "DN_demo_create_pdf.pdf";
  let pathFile = dir + document["_id"] + "/" + file_name;

  if (!fs.existsSync(dir + document["_id"])) {
    fs.mkdirSync(dir + document["_id"]);
  }
  await pdfDrawing.exportToDir(pathFile);
  DocLeadMafc.updateOne(
    { lead_id: document["_id"], code: "DN" },
    { file_path: [file_name] },
    (err, writeOpResult) => {
      console.log(writeOpResult);
      process.exit(1);
    }
  );
}
