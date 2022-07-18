import fs from "fs";
import { rgb } from "pdf-lib";
import { handleWriteFile, loadFilePdf } from "./func.js";

const generatePDF = async (
  inputPatchPDF,
  outPutPatchPDF,
  patchFont,
  dataFillOnPDF
) => {
  const result = await loadFilePdf(inputPatchPDF);

  const fontBytes = fs.readFileSync(patchFont);

  const customFont = await result.embedFont(fontBytes);
  const pages = result.getPages();
  const infoFillOnPDF = await dataFillOnPDF;

  for (let index = 0; index < pages.length; index++) {
    const firstPage = pages[index];
    const { height } = firstPage.getSize();
    for (let j = 0; j < infoFillOnPDF[index].length; j++) {
      const element = infoFillOnPDF[index][j];
      const text = element.text;
      const textSize = 11;

      firstPage.drawText(text, {
        x: element.x,
        y: Math.abs(element.y - height) + 1,
        size: textSize,
        font: customFont,
        color: rgb(0, 0.53, 0.71),
      });
    }
  }

  const pdfBytes = await result.save();
  handleWriteFile(outPutPatchPDF, pdfBytes);
};

export default generatePDF;
