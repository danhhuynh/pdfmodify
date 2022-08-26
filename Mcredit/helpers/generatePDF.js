import * as Sentry from "@sentry/node";
import fs from "fs";
import { handleWriteFile, loadFilePdf } from "./fileHandle.js";
import Section_1_UI from "../CoordinateUI/Section_1_UI.js";
import Section_2_UI from "../CoordinateUI/Section_2_UI.js";
import Section_3_UI from "../CoordinateUI/Section_3_UI.js";
import {
  genArrPoint_1 as Section_4_UI_1,
  genArrPoint_2 as Section_4_UI_2,
} from "../CoordinateUI/Section_4_UI.js";
import Section_6_UI from "../CoordinateUI/Section_6_UI.js";
import Section_7_UI from "../CoordinateUI/Section_7_UI.js";
import {
  genArrPoint as Section_9_UI,
  genArrPoint2 as Section_9_UI_2,
} from "../CoordinateUI/Section_9_UI.js";
import {
  getLeadRender,
  updateDocumentPath,
  updateLead,
} from "./mongooseConnect.js";
import { parsingAddress } from "./redisCache.js";
import { currMonthYearString } from "../../utils/common.js";
import { STATUS } from "../../config/constant.js";

const TEMPLATE_PATH = process.env.CARD_TYPE_PATH + "Mcredit/file/template_card.pdf";
const OUTPUT_PATH = process.env.STORAGE_PATH_MC;
const patchFont = process.env.CARD_TYPE_PATH + "Be_Vietnam_Pro/BeVietnamPro-Regular.ttf";

const generatePDF = async () => {
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
    const data = { ...customer, ...leadData }; //id lead will override id of customer
    //Redis
    await parsingAddress(data);
    await drawProcess(data);
  } catch (error) {
    console.log("logged", error);
    Sentry.captureException(error);
    return;
  }
};

const drawProcess = async (data) => {
  const result = await loadFilePdf(TEMPLATE_PATH);
  const fontBytes = fs.readFileSync(patchFont);

  const customFont = await result.embedFont(fontBytes);
  const pages = result.getPages();
  //Page 1
  let currPage = pages[0];

  //Section 1
  const Section_1_Arr_Point = Section_1_UI(data);
  drawFromArrPoint(Section_1_Arr_Point, currPage, customFont);
  let { height } = currPage.getSize();
  //Section 2
  const Section_2_Arr_Point = Section_2_UI(data);
  drawFromArrPoint(Section_2_Arr_Point, currPage, customFont);

  //Section 3
  const Section_3_Arr_Point = Section_3_UI(data);
  drawFromArrPoint(Section_3_Arr_Point, currPage, customFont);

  //Section 4
  let Section_4_Arr_Point = Section_4_UI_1(data);
  drawFromArrPoint(Section_4_Arr_Point, currPage, customFont);
  //Page 2
  currPage = pages[1];
  Section_4_Arr_Point = Section_4_UI_2(data);
  drawFromArrPoint(Section_4_Arr_Point, currPage, customFont);

  //Section 6
  const Section_6_Arr_Point = Section_6_UI(data);
  drawFromArrPoint(Section_6_Arr_Point, currPage, customFont);

  //Section 7
  const Section_7_Arr_Point = Section_7_UI(data);
  drawFromArrPoint(Section_7_Arr_Point, currPage, customFont);

  //Section 9
  const Section_9_Arr_Point = Section_9_UI(data);
  drawFromArrPoint(Section_9_Arr_Point, currPage, customFont);

  //Section 9_2
  //Page 3
  currPage = pages[2];
  const Section_9_Arr_Point_2 = Section_9_UI_2(data);
  drawFromArrPoint(Section_9_Arr_Point_2, currPage, customFont);

  const pdfBytes = await result.save();

  let dir = OUTPUT_PATH;
  //Folder by month
  let stored_path = currMonthYearString() + "/" + data["_id"] + "/";
  let file_name = "CustomerInformationSheet_" + data["cccd"] + ".pdf";

  try {
    await handleWriteFile(dir + stored_path, file_name, pdfBytes);

    let result = await updateDocumentPath(
      data["_id"],
      data["check_list_version"],
      stored_path + file_name
    );
    await updateLead(
      { _id: data["_id"] },
      { status_render: STATUS.RENDER_ACCA_MC_CARD_COMPLETE }
    );
    console.log({ message: "Successfully Render" }, result);
    process.exit();
  } catch (error) {
    console.log(err);
    Sentry.captureException(error);
  }
};

function drawFromArrPoint(arrPoint, currPage, customFont) {
  let { height } = currPage.getSize();
  for (let j = 0; j < arrPoint.length; j++) {
    const element = arrPoint[j];
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
}

export default generatePDF;
