import "./envLoad.js";
import * as Sentry from "@sentry/node";
import generatePDF from "./helpers/generatePDF.js";

Sentry.init({
  environment: process.env.NODE_ENV,
  dsn: process.env.SENTRY_DSN,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

generatePDF();
