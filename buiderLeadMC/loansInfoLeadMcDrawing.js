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
      x: 144,
      y: 318,
    };
  }

  drawLoanPurpose() {
    let { x, y } = this.loanPurposePos();
    switch (this.loanInfo["loan_purpose"]) {
      case "Mua hàng":
        this.draw("X", x, y);
        break;
      case "Khám/Chữa bệnh":
        this.draw("X", x + 68, y);
        break;
      case "Đi du lịch":
        this.draw("X", x + 68 + 108, y);
        break;
        case "Mua sắm":
          this.draw("X", x + 68 + 108 + 58, y);
          break;
        case "Nộp học phí":
          this.draw("X", x , y);
          break;
        case "Nhu cầu khác":
          this.draw("X", x + 68 + 108 + 58 + 62 + 75, y);
          break;
      default:
        break;
    }
  }

  LoanAmountposePos() {
    return {
      x: 144,
      y: 333,
    };
  }

  drawLoanAmount() {
    let { x, y } = this.LoanAmountposePos();
    this.draw(this.loanInfo["loan_amount"], x, y);
  }

  spVayPos() {
    return {
      x: 144,
      y: 348,
    };
  }

  drawSpVay() {
    let { x, y } = this.spVayPos();
    this.draw(this.loanInfo["scheme"], x, y);
  }
  
  insuranceCreditCardPos() {
    return {
      x: 279,
      y: 363,
    };
  }

  drawInsuranceCreditCard() {
    let { x, y } = this.insuranceCreditCardPos();
    switch (this.loanInfo["insurance_credit_card"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", x + 34, y);
        break;
    }
  }

  AmountPeriodPos() {
    return {
      x: 282,
      y: 380,
    };
  }

  drawMoneyLoan() {
    let { x, y } = this.AmountPeriodPos();
    this.draw(this.loanInfo["contract_credit_amount_period"], x, y);
  }

  insuranceCompanyPos() {
    return {
      x: 145,
      y: 412,
    };
  }

  drawInsuranceCompany() {
    let { x, y } = this.insuranceCompanyPos();
    this.draw(this.loanInfo["insurance_name"], x, y);
  }

  insuranceFeeChargePos() {
    return {
      x: 464,
      y: 412,
    };
  }

  drawInsuranceFeeCharge() {
    let { x, y } = this.insuranceFeeChargePos();
    this.draw(this.loanInfo["insurance_fee_charge"], x, y);
  }

  insurancePeriodChargePos() {
    return {
      x: 168,
      y: 428,
    };
  }

  drawInsurancePeriodCharge() {
    let { x, y } = this.insurancePeriodChargePos();
    switch (this.loanInfo["insurance_period_charge"]) {
      case "Hàng tháng":
        this.draw("X", x, y);
        break;
      case "Hàng quý":
        this.draw("X", x + 78, y);
        break;
      case "06 tháng":
        this.draw("X", x + 78 + 68, y);
        break;
      case "Hàng năm":
        this.draw("X", x + 78 + 68 + 61, y);
        break;
      case "Khác":
        this.draw("X", x + 78 + 68 + 61 + 63, y);
        break;   
    }
  }

  utilityBillPos() {
    return {
      x: 445,
      y: 458,
    };
  }

  drawUtilityBill() {
    let { x, y } = this.utilityBillPos();
    this.draw(this.loanInfo["med_value_of_utility_bill"], x, y);
  }

  averageAccountBalancePos() {
    return {
      x: 377,
      y: 473,
    };
  }

  drawAverageAccountBalance() {
    let { x, y } = this.averageAccountBalancePos();
    this.draw(this.loanInfo["med_value_of_account"], x, y);
  }


  csmBikePos() {
    return {
      x: 415,
      y: 488,
    };
  }

  drawCsmBike() {
    let { x, y } = this.csmBikePos();
    this.draw(this.loanInfo["price_of_bike"], x, y);
  }

  contractIdPos() {
    return {
      x: 115,
      y: 520,
    };
  }

  drawContractId() {
    let { x, y } = this.contractIdPos();
    this.draw(this.loanInfo["contract_credit_no"], x, y);
  }

  contractCreditDateEndPos() {
    return {
      x: 400,
      y: 520,
    };
  }

  drawContractCreditDateEnd() {
    let { x, y } = this.contractCreditDateEndPos();
    let arrDate = this.leadInfo["contract_credit_date_end"]
    ? this.leadInfo["contract_credit_date_end"].split("/")
    : "";
  this.draw(arrDate[0], x, y);
  this.draw(arrDate[1], x + 25, y);
  this.draw(arrDate[2], x + 50, y);
  }

  contractCreditPeriodPassPos() {
    return {
      x: 175,
      y: 534,
    };
  }

  drawContractCreditPeriodPass() {
    let { x, y } = this.contractCreditPeriodPassPos();
    this.draw(this.loanInfo["contract_credit_period_pass"], x, y);
  }

  contractCreditAmountPeriodPos() {
    return {
      x: 477,
      y: 534,
    };
  }

  drawContractCreditAmountPeriod() {
    let { x, y } = this.drawContractCreditAmountPeriod();
    this.draw(this.loanInfo["contract_credit_amount_period"], x, y);
  }
}
