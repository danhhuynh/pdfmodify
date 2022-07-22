import "./envLoad.js";
import * as Sentry from "@sentry/node";
import generatePDF from "./helpers/generatePDF.js";
import dataFieldOnPDF from "./coordinate/Mcredit.js";

Sentry.init({
  environment: process.env.NODE_ENV,
  dsn: process.env.SENTRY_DSN,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const pdfPatchInput = "./file/Mcredit.pdf";
const pdfPatchOutput = "./file/example.pdf";
const patchFont = "../Be_Vietnam_Pro/BeVietnamPro-Regular.ttf";
const dataFillOnPDF = dataFieldOnPDF();

generatePDF(pdfPatchInput, pdfPatchOutput, patchFont, dataFillOnPDF);
