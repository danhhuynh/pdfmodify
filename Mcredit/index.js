import generatePDF from "./helpers/generatePDF.js";
import dataFieldOnPDF from "./constants/Mcredit.js";

const pdfPatchInput = "./file/Mcredit.pdf";
const pdfPatchOutput = "./file/example.pdf";
const patchFont = "../Be_Vietnam_Pro/BeVietnamPro-Regular.ttf";
const dataFillOnPDF = dataFieldOnPDF();

generatePDF(pdfPatchInput, pdfPatchOutput, patchFont, dataFillOnPDF);
