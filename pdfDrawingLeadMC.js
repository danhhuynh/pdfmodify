import { degrees, PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import fontkit from "@pdf-lib/fontkit";

import customerInfoLeadMcDrawing from "./buiderLeadMC/customerInfoLeadMcDrawing.js";
import loansInfoLeadMcDrawing from "./buiderLeadMC/loansInfoLeadMcDrawing.js"
 import personalIncomeLeadMcDrawing from "./buiderLeadMC/personalIncomeLeadMcDrawing.js";
 import familyInfoLeadMcDrawing from "./buiderLeadMC/familyInfoLeadMcDrawing.js";
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
    this.size = 9;
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
    this.loansInfoLeadMcDrawing();
    this.personalIncomeLeadMcDrawing();
     this.familyInfoLeadMcDrawing();
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
    customerInfoDrawing.drawEmail();
    customerInfoDrawing.drawPhone();
    customerInfoDrawing.drawCmnd();
  }

loansInfoLeadMcDrawing() {
    let loanInfoDrawing = new loansInfoLeadMcDrawing(
      this.config,
      this.leadInfoMation
    );
    loanInfoDrawing.drawLoanPurpose();
    loanInfoDrawing.drawLoanAmount();
    loanInfoDrawing.drawSpVay();
    loanInfoDrawing.drawInsuranceCreditCard();
    loanInfoDrawing.drawMoneyLoan();
    loanInfoDrawing.drawInsuranceCompany();
    loanInfoDrawing.drawInsuranceFeeCharge();
    loanInfoDrawing.drawInsurancePeriodCharge();
    loanInfoDrawing.drawUtilityBill();
    loanInfoDrawing.drawAverageAccountBalance();
    loanInfoDrawing.drawCsmBike();
    loanInfoDrawing.drawContractId();
    loanInfoDrawing.drawContractCreditDateEnd();
    loanInfoDrawing.drawContractCreditPeriodPass();
    loanInfoDrawing.drawContractCreditAmountPeriod();
  }

  personalIncomeLeadMcDrawing() {
    let personalIncomeDrawing = new personalIncomeLeadMcDrawing(
      this.config,
      this.leadInfoMation
    );
    personalIncomeDrawing.drawJobTitle();
    personalIncomeDrawing.drawjobPosition();
    personalIncomeDrawing.drawTypeCompanyName();
    personalIncomeDrawing.drawCompanyAddress();
    personalIncomeDrawing.drawCompanyPhone();
    personalIncomeDrawing.drawCompanyTax();
    personalIncomeDrawing.drawTimeWorking();
    personalIncomeDrawing.drawMainIncome();
    personalIncomeDrawing.drawlabourContract();
    personalIncomeDrawing.drawgetSalaryFrom();
    
  }
  familyInfoLeadMcDrawing(){
    let familyInfoDrawing = new familyInfoLeadMcDrawing(
      this.config,
      this.leadInfoMation
    );
    familyInfoDrawing.drawRelationshipWithBorrower();
    this.jumpPage();
    familyInfoDrawing = new familyInfoLeadMcDrawing(
      this.config,
      this.leadInfoMation
    );
    familyInfoDrawing.drawSpouseName();
    familyInfoDrawing.drawSpouseDob();
    familyInfoDrawing.drawspouseCmnd();
    familyInfoDrawing.drawSpousePhone();
    familyInfoDrawing.drawSpouseAddress();
  }


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
