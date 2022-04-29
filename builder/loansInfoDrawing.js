import Builder from "./Builder.js";

export default class LoansInfoDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  loanPurposePos() {
    return {
      x: 165,
      y: 272,
    };
  }

  drawLoanPurpose() {
    let { x, y } = this.loanPurposePos();
    switch (this.loanInfo["loan_purpose"]) {
      case "Mua hàng":
        this.draw("X", x, y);
        break;
      case "Sửa nhà":
        this.draw("X", x + 94, y);
        break;
      case "Chi phí y tế":
        this.draw("X", x + 91 * 2, y);
        break;

      default:
        break;
    }

    // this.draw("X", x + 92 * 3, y);

    this.draw(this.loanInfo["due_date"], x + 80, y - 26);
  }

  spVayPos() {
    return {
      x: 50,
      y: 200,
    };
  }

  drawSpVay() {
    let { x, y } = this.spVayPos();

    switch (this.loanInfo["scheme"]) {
      case "Employee Cash Loan":
        this.draw("X", x, y);
        this.draw(this.loanInfo["scheme_detail"], x + 57, y - 24);
        break;
      case "Self-Employee":
        this.draw("X", x + 232, y);
        this.draw(this.loanInfo["scheme_detail"], x + 232 + 57, y - 24);
        break;
      case "Fast Loan":
        this.draw("X", x + 446, y);
        this.draw(this.loanInfo["scheme_detail"], x + 446 + 57, y - 24);
        break;
      case "UCCC":
        this.draw("X", x, y - 24);
        this.draw(this.loanInfo["scheme_detail"], x + 57, y - 24);
        break;
      case "EVN":
        this.draw("X", x + 232, y - 24);
        this.draw(this.loanInfo["scheme_detail"], x + 232 + 57, y - 24);
        break;
      case "UBS":
        this.draw("X", x + 446, y - 24);
        this.draw(this.loanInfo["scheme_detail"], x + 446 + 57, y - 24);
        break;
      case "Water CL":
        this.draw("X", x, y - 48);
        this.draw(this.loanInfo["scheme_detail"], x + 57, y - 48);
        break;
      case "Post-Paid CL":
        this.draw("X", x + 232, y - 48);
        this.draw(this.loanInfo["scheme_detail"], x + 232 + 57, y - 48);
        break;
      case "CC":
        this.draw("X", x + 446, y - 48);
        this.draw(this.loanInfo["scheme_detail"], x + 446 + 57, y - 48);
        break;
      case "Life-Insurance":
        this.draw("X", x, y - 72);
        this.draw(this.loanInfo["scheme_detail"], x + 88, y - 72, 8);
        this.draw(this.loanInfo["period_payment"], x + 370, y - 24);
        this.draw(this.loanInfo["money_pay_each_period"], x + 550, y - 24);
        break;
      case "BAS":
        this.draw("X", x, y - 96);
        this.draw(this.loanInfo["scheme_detail"], x + 90, y - 96);
        break;

      default:
        this.draw("X", x + 232, y - 96);
        this.draw(this.loanInfo["scheme_detail"], x + 232 + 50, y - 96);
        break;
    }
  }

  moneyLoanPos() {
    return {
      x: 180,
      y: this.height - 76,
    };
  }

  drawMoneyLoan() {
    let { x, y } = this.moneyLoanPos();
    this.draw(this.loanInfo["consumer_loan"], x, y);
    this.draw(this.loanInfo["consumer_loan_by_word"], x + 173, y);
    this.draw(this.loanInfo["how_long"], x + 294 + 173, y);

    this.draw(this.loanInfo["no_insurance_borrower"], x - 74, y - 46);
    this.draw(this.loanInfo["total_loan"].toString(), x + 185, y - 72);
  }
}
