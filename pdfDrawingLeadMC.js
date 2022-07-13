import { degrees, PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import fontkit from "@pdf-lib/fontkit";

import customerInfoLeadMcDrawing from "./buiderLeadMC/customerInfoLeadMcDrawing.js";
// import ResidenceInfoDrawing from "./builder/residenceInfoDrawing.js";
// import LoansInfoDrawing from "./builder/loansInfoDrawing.js";
// import OccupationInfoDrawing from "./builder/occupationInfoDrawing.js";

export default class PdfDrawingLeadMC {
  constructor(leadInfo) {
    this.leadInfoMation = leadInfo;
  }
  async init(templateDir) {
    this.tempalte = templateDir;
    let existingPdfBytes = fs.readFileSync(this.tempalte);
    this.pdfDoc = await PDFDocument.load(existingPdfBytes);

    // let fontBytes = fs.readFileSync("./alegreya-sans/AlegreyaSans-Regular.otf");
    let fontBytes = fs.readFileSync(
      "./Be_Vietnam_Pro/BeVietnamPro-Regular.ttf"
    );
    this.pdfDoc.registerFontkit(fontkit);
    this.myFont = await this.pdfDoc.embedFont(fontBytes);
    this.size = 11;
    this.color = rgb(0, 0, 0);

    this.pages = this.pdfDoc.getPages();
    this.config = {
      page: this.pages[0],
      font: this.myFont,
      fontSize: this.size,
      color: this.color,
    };
  }

  jumpPage() {
    this.config.page = this.pages[1];
  }

  startDraw() {
    //this.drawHeaderSection();
    this.customerInfoLeadMcDrawing();
    // this.drawResidenceInfo();
    // this.drawLoansInfo();
    // this.drawOccupationInfo();
  }

  customerInfoLeadMcDrawing() {
    let customerInfoDrawing = new customerInfoLeadMcDrawing(
      this.config,
      this.leadInfoMation
    );
    customerInfoDrawing.drawName();
    customerInfoDrawing.drawGender();
    customerInfoDrawing.drawDob();
    customerInfoDrawing.drawMaritalStatus();
    customerInfoDrawing.drawEducationStatus();
    customerInfoDrawing.drawCurrentAddress();
    customerInfoDrawing.drawingResidenceAddress();
    customerInfoDrawing.drawTimeLiving();
    customerInfoDrawing.drawAccommodationStatus();
  }

//   drawResidenceInfo() {
//     let residenceInfoDrawing = new ResidenceInfoDrawing(
//       this.config,
//       this.leadInfoMation
//     );
//     residenceInfoDrawing.drawCurrentAddress();
//     residenceInfoDrawing.drawLivingInfo();
//     residenceInfoDrawing.drawingStatusProperty();
//     residenceInfoDrawing.drawingRentedHouse();
//     residenceInfoDrawing.drawingResidenceAddress();
//   }

//   drawLoansInfo() {
//     let loanInfoDrawing = new LoansInfoDrawing(
//       this.config,
//       this.leadInfoMation
//     );
//     loanInfoDrawing.drawLoanPurpose();
//     loanInfoDrawing.drawSpVay();
//     this.jumpPage();
//     loanInfoDrawing = new LoansInfoDrawing(this.config, this.leadInfoMation);
//     loanInfoDrawing.drawMoneyLoan();
//   }
// drawOccupationInfo() {
//     let occupationInfoDrawing = new OccupationInfoDrawing(
//       this.config,
//       this.leadInfoMation
//     );
//     occupationInfoDrawing.drawSourceIncome();
//     occupationInfoDrawing.drawThongTinThuNhap();
//     occupationInfoDrawing.drawSpouseInfo();
//     occupationInfoDrawing.drawReferenceInfo();
//     occupationInfoDrawing.drawDebtInfo();
//     occupationInfoDrawing.drawBankInfo();
//     occupationInfoDrawing.drawNote();
//   }

  async exportToDir(filePath, callBack, params) {
    console.log(filePath);
    const pdfBytes = await this.pdfDoc.save();
    fs.writeFile(filePath, pdfBytes, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File Created");
      callBack(params);
    });
  }
}