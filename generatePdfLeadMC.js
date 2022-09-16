import PdfDrawingLeadMC from "./pdfDrawingLeadMC.js";
import { createRequire } from "module";
import { STATUS } from "./config/constant.js";
const require = createRequire(import.meta.url);
var fs = require("fs");
require("dotenv").config();
import * as Sentry from "@sentry/node";

import LeadMC from "./models/LeadMC.js";
import DocumentMC from "./models/DocumentMc.js";
import { currMonthYearString } from "./utils/common.js";

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

Sentry.init({
  environment: process.env.NODE_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

try {
  LeadMC.findOne({
    status_render: STATUS["RENDER_ACCA_MC_VAYVON"],
    updated_at: { $lte: new Date(Date.now() - 1000 * 60 * 3) },
  })
    .populate("customer")
    .exec((err, lead) => {
      if (err) throw err;
      if (!lead) {
        console.log("Empty Data");
        process.exit();
      }
      drawPdf(lead);
    });
} catch (error) {
  console.log(error);
  Sentry.captureException(error);
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
global.promiseStore = [];
async function drawPdf(lead) {
  let dir = process.env.STORAGE_PATH_MC;
  let template = process.env.MC_VAYVON_TEMPLATE_PATH;
  let PdfDrawingLead = new PdfDrawingLeadMC(lead);

  //Folder by month
  let file_name =
    "CustomerInformationSheet__" + lead["customer"]["cccd"] + ".pdf";
  let pathFile =
    dir + currMonthYearString() + "/" + lead["_id"] + "/" + file_name;
  let stored_path = currMonthYearString() + "/" + lead["_id"] + "/" + file_name;
  let version = lead["defer_info"] ? lead["defer_info"]["version"] : null;

  await PdfDrawingLead.init(template);
  PdfDrawingLead.startDraw();
  await delay(1000);
  console.log(global.promiseStore);
  Promise.all(global.promiseStore).then((values) => {
    console.log(values);
    if (!fs.existsSync(dir + lead["_id"])) {
      fs.mkdirSync(dir + lead["_id"], { recursive: true });
    }
    PdfDrawingLead.exportToDir(pathFile, updateLead, {
      version,
      stored_path,
      _id: lead["_id"],
    });
  });
}

function updateLead({ version, stored_path, _id }) {
  DocumentMC.updateOne(
    { lead_id: _id, code: "CustomerInformationSheet", version: version },
    { file_path: [stored_path] },
    (err, writeOpResult) => {
      LeadMC.updateOne(
        { _id: _id },
        { status_render: STATUS["RENDER_ACCA_MC_VAYVON_COMPLETE"] },
        (err, writeOpResult) => {
          if (err) {
            console.log(err);
            Sentry.captureException(error);
            return;
          }
          console.log({ message: "Successfully Updated" });
          process.exit();
        }
      );
    }
  );
}
