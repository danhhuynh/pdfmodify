import fs from "fs";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument } from "pdf-lib";

export const handleWriteFile = (pathWithFileName, pdfBytes) =>
  fs.writeFile(pathWithFileName, pdfBytes, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Done");
    process.exit();
  });

export const loadFilePdf = async (patchFile) => {
  const formPdfBytes = fs.readFileSync(patchFile);
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  pdfDoc.registerFontkit(fontkit);
  return pdfDoc;
};
