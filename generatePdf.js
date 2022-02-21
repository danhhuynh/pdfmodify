import PdfDrawing from "./pdfDrawing.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

import LeadMafc from "./models/leadMafc.js";
import { systemFields } from "./constant/system_fields.js";

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const getLeadMAFC = new Promise((resolve, reject) => {
  LeadMafc.aggregate([
    { $match: { _id: mongoose.Types.ObjectId("61f668ba65802bcb185d6d0c") } },
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
  await pdfDrawing.exportToDir(dir + "demo_create_pdf.pdf");
}
