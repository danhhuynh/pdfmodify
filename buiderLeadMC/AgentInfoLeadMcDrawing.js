import Builder from "./Builder.js";

export default class familyInfoLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  saleNamePos() {
    return {
      x: 119,
      y: 600,
    };
  }

  drawSaleName() {
    let { x, y } = this.saleNamePos();
    this.draw(this.loanInfo["salename"], x, y);
  
  }

  saleCodePos() {
    return {
      x: 138,
      y: 615,
    };
  }

  drawSaleCode() {
    let { x, y } = this.saleCodePos();
    this.draw(this.loanInfo["salecode"], x, y);
  }

  salePhonePos() {
    return {
      x: 392,
      y: 615,
    };
  }

  drawSalePhone() {
    let { x, y } = this.salePhonePos();
    this.draw(this.loanInfo["salephone"], x, y);
  }
  
  lineOfCreditPos() {
    return {
      x: 196,
      y: 735,
    };
  }

  drawLineOfCredit() {
    let { x, y } = this.lineOfCreditPos();
    this.draw(this.loanInfo["line_of_credit"], x, y);
  }

  lineOfCreditByWordPos() {
    return {
      x: 351,
      y: 735,
    };
  }

  drawlineOfCreditByWord() {
    let { x, y } = this.lineOfCreditByWordPos();
    this.draw(this.loanInfo["line_of_credit_by_word"], x, y);
  }

  creditReceiveMethodPos() {
    return {
      x: 54,
      y: 759,
    };
  }

  drawCreditReceiveMethod() {
    let { x, y } = this.creditReceiveMethodPos();
    switch (this.loanInfo["credit_receive_method"]) {
      case "Địa chỉ thường trú":
        this.draw("X", x, y);
        break;
      case "Địa chỉ tạm trú":
        this.draw("X", 152 , y);
        break;
      case "Địa chỉ công ty":
        this.draw("X", 256 , y);
        break;
      default:
        break;
    }
  }secure_question

  secureQuestionPos() {
    return {
      x: 50,
      y: 55,
    };
  }

  drawSecureQuestion() {
    let { x, y } = this.secureQuestionPos();
    switch (this.loanInfo["secure_question"]) {
      case "Họ tên mẹ":
        this.draw("X", x, y);
        break;
      case "Tên trường tiểu học đầu tiên":
        this.draw("X", 113 , y);
        break;
      case "Tên vật nuôi":
        this.draw("X", 251 , y);
        break;
      default:
        break;
    }
  }

  internetExchangeSignupPos() {
    return {
      x: 189,
      y: 82,
    };
  }

  drawInternetExchangeSignup() {
    let { x, y } = this.internetExchangeSignupPos();
    switch (this.loanInfo["internet_exchange_signup"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 224 , y);
        break;
      default:
        break;
    }
  }

  insuranceCreditCardPos() {
    return {
      x: 152,
      y: 108,
    };
  }

  drawInsuranceCreditCard() {
    let { x, y } = this.insuranceCreditCardPos();
    switch (this.loanInfo["insurance_credit_card"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 190 , y);
        break;
      default:
        break;
    }
  }

  cardReleaseFeePos() {
    return {
      x: 146,
      y: 121,
    };
  }

  drawCardReleaseFee() {
    let { x, y } = this.cardReleaseFeePos();
    switch (this.loanInfo["card_release_fee"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 190 , y);
        break;
      default:
        break;
    }
  }

  anualFeePos() {
    return {
      x: 146,
      y: 135,
    };
  }

  drawAnualFee() {
    let { x, y } = this.anualFeePos();
    switch (this.loanInfo["anual_fee"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 185 , y);
        break;
      default:
        break;
    }
  }
}
