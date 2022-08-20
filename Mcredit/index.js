import "./envLoad.js";
import * as Sentry from "@sentry/node";
import generatePDF from "./helpers/generatePDF.js";

Sentry.init({
  environment: process.env.NODE_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

generatePDF();
