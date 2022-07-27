import fs from "fs";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument } from "pdf-lib";

export const handleWriteFile = (dir, file_name, pdfBytes) => {
  checkDirAndCreate(dir);
  fs.writeFile(dir + file_name, pdfBytes, (err) => {
    if (err) {
      throw err;
    }
    console.log("Done");
    process.exit();
  });
};

function checkDirAndCreate(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export const loadFilePdf = async (patchFile) => {
  const formPdfBytes = fs.readFileSync(patchFile);
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  pdfDoc.registerFontkit(fontkit);
  return pdfDoc;
};
