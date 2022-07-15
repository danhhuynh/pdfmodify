import Builder from "./Builder.js";

export default class contractLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["lead"];
  }

  disburmentFormPos() {
    return {
      x: 195,
      y:this.height - 369,
    };
  }

  drawDisburmentForm() {
    let { x, y } = this.disburmentFormPos();
    switch (this.loanInfo["disburment_form"]) {
      case "Nhận tiền mặt tại đại lý chi hộ":
        this.draw("X", x, y);
        break;
      case "Chuyển khoản vào số tài khoản sau":
        this.draw("X", x ,this.height - 383);
        break;
      default:
        break;
    }
  }

  disburmentFormBankPos() {
    return {
      x: 158,
      y:this.height - 395,
    };
  }

  drawdisburmentFormBank() {
    let { x, y } = this.disburmentFormBankPos();
    this.draw(this.loanInfo["disburment_form_bank"], x, y);
   
  }

  disburmentFormBankBranchPos() {
    return {
      x: 403,
      y:this.height - 395,
    };
  }

  drawDisburmentFormBankBranch() {
    let { x, y } = this.disburmentFormBankBranchPos();
    this.draw(this.loanInfo["disburment_form_bank_branch"], x, y);

  }
  
  
}
