import PdfDrawing from "./pdfDrawing.js";
import { createRequire } from "module";
import { STATUS } from "./config/constant.js";
const require = createRequire(import.meta.url);
var fs = require("fs");
require("dotenv").config();

import * as common from "./utils/common.js";

import LeadMafc from "./models/leadMafc.js";
import DocLeadMafc from "./models/documentMafc.js";
import { systemFields } from "./constant/system_fields.js";

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const getLeadMAFC = async function () {
  return new Promise((resolve, reject) => {
    LeadMafc.aggregate([
      {
        $match: {
          status_render: STATUS["RENDER_ACCA"],
          updated_at: { $lte: new Date(Date.now() - 1000 * 20) },
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
};

function start() {
  try {
    getLeadMAFC().then(
      (leads) => {
        if (!leads || leads.length === 0) {
          console.log("Empty Data");
          retry();
          return;
        }
        let lead = leads[0];
        lead["customer"] = lead["customer"][0] || lead["customer"];
        drawPdf(lead);
      },
      (err) => {
        throw err;
      }
    );
  } catch (error) {
    console.log(error);
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function drawPdf(lead) {
  global.promiseStore = [];
  let dir = process.env.STORAGE_PATH;
  let template = process.env.TEMPLATE_PATH;
  let pdfDrawing = new PdfDrawing(lead);
  let file_name = "DN_" + lead["customer"]["cccd"] + ".pdf";
  let pathFile = dir + common.currMonthYearString() + "/" + lead["_id"] + "/";
  let version = lead["defer_info"] ? lead["defer_info"]["version"] : null;

  await pdfDrawing.init(template);
  pdfDrawing.startDraw();
  await delay(1000);
  Promise.all(global.promiseStore).then((values) => {
    console.log(fs.existsSync(pathFile));
    if (!fs.existsSync(pathFile)) {
      fs.mkdirSync(pathFile, { recursive: true });
    }
    pdfDrawing.exportToDir(pathFile + file_name, updateLead, {
      version,
      file_name,
      _id: lead["_id"],
    });
  });
}

function updateLead({ version, file_name, _id }) {
  DocLeadMafc.updateOne(
    { lead_id: _id, code: "DN", version: version },
    { file_path: [common.currMonthYearString() + "/" + _id + "/" + file_name] },
    (err, writeOpResult) => {
      LeadMafc.updateOne(
        { _id: _id },
        { status_render: STATUS["RENDER_ACCA_COMPLETE"] },
        (err, writeOpResult) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(writeOpResult);
          console.log({ message: "Successfully Updated" });
          retry();
        }
      );
    }
  );
}

function retry() {
  setTimeout(() => {
    console.log("Retry!!!");
    start();
  }, 1000);
}

start();
