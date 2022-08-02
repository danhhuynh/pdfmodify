import Builder from "./Builder.js";

export default class loansInfoLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  loanPurposePos() {
    return {
      x: 140 + 7,
      y: this.height + 13 - 321,
    };
  }

  drawLoanPurpose() {
    let { x, y } = this.loanPurposePos();

    switch (this.loanInfo["loan_purpose"]) {
      case "Sửa nhà":
        this.draw("X", x, y);
        break;
      case "Khám/Chữa bệnh":
        this.draw("X", x + 68, y);
        break;
      case "Đi du lịch":
        this.draw("X", x + 68 + 108 + 5, y);
        break;
      case "Mua sắm":
        this.draw("X", x + 68 + 108 + 58 + 11, y);
        break;
      case "Nộp học phí":
        this.draw("X", 435 + 19, y);
        break;
      case "Nhu cầu khác":
        this.draw("X", x + 68 + 108 + 58 + 62 + 75 + 17, y);
        this.draw(
          this.loanInfo["other_loan_purpose"],
          x + 68 + 108 + 58 + 62 + 75,
          y
        );
        break;
      default:
        break;
    }
  }

  loanPeriodPos() {
    return {
      x: 145 + 10,
      y: this.height - 334,
    };
  }

  drawLoanPeriod() {
    let { x, y } = this.loanPeriodPos();
    this.draw(this.loanInfo["loan_period"], x, y);
    //this.draw("20", x, y);
  }

  spVayPos() {
    return {
      x: 144 + 10,
      y: this.height - 350,
    };
  }

  drawSpVay() {
    let { x, y } = this.spVayPos();
    this.draw(this.loanInfo["product"], x, y);
  }

  insuranceCreditCardPos() {
    return {
      x: 276 + 10,
      y: this.height - 366,
    };
  }

  drawInsuranceCreditCard() {
    let { x, y } = this.insuranceCreditCardPos();
    switch (this.loanInfo["insurance_credit_card"]) {
      case "Yes":
        this.draw("X", x, y);
        break;
      case "No":
        this.draw("X", x + 33 * 2, y);
        break;
    }
  }

  loanAmountPos() {
    return {
      x: 283 + 30,
      y: this.height - 379,
    };
  }

  drawMoneyLoan() {
    let { x, y } = this.loanAmountPos();
    this.draw(this.loanInfo["loan_amount"], x, y);
  }

  insuranceCompanyPos() {
    return {
      x: 147 + 10,
      y: this.height - 413 - 7,
    };
  }

  drawInsuranceCompany() {
    let { x, y } = this.insuranceCompanyPos();
    this.draw(this.loanInfo["insurance_name"], x, y);
  }

  insuranceFeeChargePos() {
    return {
      x: 465 + 20,
      y: this.height - 413 - 7,
    };
  }

  drawInsuranceFeeCharge() {
    let { x, y } = this.insuranceFeeChargePos();
    this.draw(this.loanInfo["insurance_fee_charge"], x, y);
  }

  insurancePeriodChargePos() {
    return {
      x: 165 + 3,
      y: this.height - 431 - 7,
    };
  }

  drawInsurancePeriodCharge() {
    let { x, y } = this.insurancePeriodChargePos();
    switch (this.loanInfo["insurance_period_charge"]) {
      case "Hàng tháng":
        this.draw("X", x, y);
        break;
      case "Hàng quý":
        this.draw("X", x + 74, y);
        break;
      case "06 tháng":
        this.draw("X", x + 78 + 64, y);
        break;
      case "Hàng năm":
        this.draw("X", x + 78 + 68 + 60, y);
        break;
      default:
        this.draw("X", x + 78 + 68 + 61 + 63, y);
        this.draw(
          this.loanInfo["insurance_period_charge"],
          x + 78 + 68 + 61 + 63 + 50 + 20,
          y
        );
        break;
    }
  }

  utilityBillPos() {
    return {
      x: 25 + 445,
      y: this.height - 7 - 459,
    };
  }

  drawUtilityBill() {
    let { x, y } = this.utilityBillPos();
    this.draw(this.loanInfo["med_value_of_utility_bill"], x, y);
  }

  averageAccountBalancePos() {
    return {
      x: 25 + 377,
      y: this.height - 7 - 474,
    };
  }

  drawAverageAccountBalance() {
    let { x, y } = this.averageAccountBalancePos();
    this.draw(this.loanInfo["med_value_of_account"], x, y);
  }

  csmBikePos() {
    return {
      x: 25 + 417,
      y: this.height - 7 - 490,
    };
  }

  drawCsmBike() {
    let { x, y } = this.csmBikePos();
    this.draw(this.loanInfo["price_of_bike"], x, y);
  }

  contractIdPos() {
    return {
      x: 10 + 115,
      y: this.height - 7 - 521,
    };
  }

  drawContractId() {
    let { x, y } = this.contractIdPos();
    this.draw(this.loanInfo["contract_credit_no"], x, y);
  }

  contractCreditDateEndPos() {
    return {
      x: 7 + 400,
      y: this.height - 7 - 521,
    };
  }

  drawContractCreditDateEnd() {
    let { x, y } = this.contractCreditDateEndPos();
    let arrDate = this.loanInfo["contract_credit_date_end"]
      ? this.loanInfo["contract_credit_date_end"].split("/")
      : "";
    arrDate && this.draw(arrDate[0], x, y);
    arrDate && this.draw(arrDate[1], x + 20, y);
    arrDate && this.draw(arrDate[2], x + 45, y);
  }

  contractCreditPeriodPassPos() {
    return {
      x: 12 + 177,
      y: this.height - 7 - 536,
    };
  }

  drawContractCreditPeriodPass() {
    let { x, y } = this.contractCreditPeriodPassPos();
    this.draw(this.loanInfo["contract_credit_period_pass"], x, y);
  }

  contractCreditAmountPeriodPos() {
    return {
      x: 20 + 478,
      y: this.height - 7 - 536,
    };
  }

  drawContractCreditAmountPeriod() {
    let { x, y } = this.contractCreditAmountPeriodPos();
    this.draw(this.loanInfo["contract_credit_amount_period"], x, y);
  }
}
