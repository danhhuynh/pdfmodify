import * as Sentry from "@sentry/node";
import fs from "fs";
import { rgb } from "pdf-lib";
import { handleWriteFile, loadFilePdf } from "./fileHandle.js";
import Section_1_UI from "../CoordinateUI/Section_1_UI.js";
import Section_2_UI from "../CoordinateUI/Section_2_UI.js";
import { getLeadRender } from "./mongooseConnect.js";

const generatePDF = async (
  inputPatchPDF,
  outPutPatchPDF,
  patchFont,
  dataFillOnPDF
) => {
  let leadData = [];
  try {
    leadData = await getLeadRender();
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
    return;
  }

  if (leadData.length === 0) {
    console.log("No Data");
    process.exit();
  }
  try {
    leadData = leadData[0];
    const customer = leadData.customer;
    const data = { ...leadData, ...customer };
    await mainProcess(
      data,
      inputPatchPDF,
      outPutPatchPDF,
      patchFont,
      dataFillOnPDF
    );
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
    return;
  }
};

const mainProcess = async (
  data,
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

  let currPage = pages[0];
  let { height } = currPage.getSize();
  //Section 1
  const Section_1_Arr_Point = Section_1_UI(data);
  for (let j = 0; j < Section_1_Arr_Point.length; j++) {
    const element = Section_1_Arr_Point[j];
    if (!element || !element.x || !element.y) {
      continue;
    }
    const text = element.text || "";
    const textSize = 9;

    currPage.drawText(text || "", {
      x: element.x,
      y: Math.abs(element.y - height) + 1,
      size: element.fontSize || textSize,
      font: customFont,
    });
  }

  //Section 2
  const Section_2_Arr_Point = Section_2_UI(data);
  for (let j = 0; j < Section_2_Arr_Point.length; j++) {
    const element = Section_2_Arr_Point[j];
    if (!element || !element.x || !element.y) {
      continue;
    }
    const text = element.text || "";
    const textSize = 9;

    currPage.drawText(text || "", {
      x: element.x,
      y: Math.abs(element.y - height) + 1,
      size: element.fontSize || textSize,
      font: customFont,
    });
  }

  for (let index = 0; index < pages.length; index++) {
    const firstPage = pages[index];
    const { height } = firstPage.getSize();
    for (let j = 0; j < infoFillOnPDF[index].length; j++) {
      const element = infoFillOnPDF[index][j];
      const text = element.text;
      const textSize = 10;

      firstPage.drawText(text || "", {
        x: element.x,
        y: Math.abs(element.y - height) + 1,
        size: textSize,
        font: customFont,
      });
    }
  }
  const pdfBytes = await result.save();
  handleWriteFile(outPutPatchPDF, pdfBytes);
};

export default generatePDF;
