import PdfDrawingLeadMC from "./PdfDrawingLeadMC.js";
import { createRequire } from "module";
import { STATUS } from "./config/constant.js";
const require = createRequire(import.meta.url);
var fs = require("fs");
require("dotenv").config();
import * as Sentry from "@sentry/node";

Sentry.init({
  environment: process.env.NODE_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

import LeadMC from "./models/LeadMC.js";

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

async function execute() {
  try {
    let promiseStore = [];
    let leads = await LeadMC.find({
      status_render: "RENDER_ACCA_MC",
    });
    if (leads.length === 0) {
      console.log("Empty Data");
      process.exit();
    }
    leads.forEach((element) => {
      if (element.channel === "THẺ") {
        promiseStore.push(
          LeadMC.updateOne(
            { _id: element["_id"] },
            { $set: { status_render: STATUS.RENDER_ACCA_MC_CARD } }
          )
        );
      } else {
        promiseStore.push(
          LeadMC.updateOne(
            { _id: element["_id"] },
            { $set: { status_render: STATUS.RENDER_ACCA_MC_VAYVON } }
          )
        );
      }

      Promise.all(promiseStore).then(() => {
        console.log("Done");
        process.exit();
      });
    });
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
  }
}
execute();
