import Builder from "./Builder.js";

export default class AgentInfoLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  saleNamePos() {
    return {
      x: 119,
      y:this.height - 601,
    };
  }

  drawSaleName() {
    let { x, y } = this.saleNamePos();
    this.draw(this.loanInfo["salename"], x, y);
  }

  saleCodePos() {
    return {
      x: 138,
      y:this.height - 616,
    };
  }

  drawSaleCode() {
    let { x, y } = this.saleCodePos();
    this.draw(this.loanInfo["salecode"], x, y);
  }

  salePhonePos() {
    return {
      x: 392,
      y:this.height - 616,
    };
  }

  drawSalePhone() {
    let { x, y } = this.salePhonePos();
    this.draw(this.loanInfo["salephone"], x, y);
  }
  
  lineOfCreditPos() {
    return {
      x: 196,
      y:this.height - 736,
    };
  }

  drawLineOfCredit() {
    let { x, y } = this.lineOfCreditPos();
    this.draw(this.loanInfo["line_of_credit"], x, y);
    
  }

  lineOfCreditByWordPos() {
    return {
      x: 351,
      y:this.height - 736,
    };
  }

  drawlineOfCreditByWord() {
    let { x, y } = this.lineOfCreditByWordPos();
    this.draw(this.loanInfo["line_of_credit_by_word"], x, y);

  }

  creditReceiveMethodPos() {
    return {
      x: 50,
      y:this.height - 762,
    };
  }

  drawCreditReceiveMethod() {
    let { x, y } = this.creditReceiveMethodPos();
    switch (this.loanInfo["credit_receive_method"]) {
      case "Địa chỉ thường trú":
        this.draw("X", x, y);
        break;
      case "Địa chỉ tạm trú":
        this.draw("X", 149 , y);
        break;
      case "Địa chỉ công ty":
        this.draw("X", 252 , y);
        break;
      default:
        break;
    }
  }

  secureQuestionPos() {
    return {
      x: 48,
      y:this.height - 58,
    };
  }

  drawSecureQuestion() {
    let { x, y } = this.secureQuestionPos();
    switch (this.loanInfo["secure_question"]) {
      case "Họ tên mẹ":
        this.draw("X", x, y);
        break;
      case "Tên trường tiểu học đầu tiên":
        this.draw("X", 110 , y);
        break;
      case "Tên vật nuôi":
        this.draw("X", 248 , y);
      break;
      default:
        break;
    }
  }

  internetExchangeSignupPos() {
    return {
      x: 186,
      y:this.height - 84,
    };
  }

  drawInternetExchangeSignup() {
    let { x, y } = this.internetExchangeSignupPos();
    switch (this.loanInfo["internet_exchange_signup"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 220 , y);
        break;
      default:
        break;
    }
  }

  insuranceCreditCardPos() {
    return {
      x: 149,
      y:this.height - 110,
    };
  }

  drawInsuranceCreditCard() {
    let { x, y } = this.insuranceCreditCardPos();
    switch (this.loanInfo["insurance_credit_card"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 186 , y);
        break;
      default:
        break;
    }
  }

  cardReleaseFeePos() {
    return {
      x: 143,
      y:this.height - 124,
    };
  }

  drawCardReleaseFee() {
    let { x, y } = this.cardReleaseFeePos();
    
    
    switch (this.loanInfo["card_release_fee"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 187 , y);
        break;
      default:
        break;
    }
  }

  anualFeePos() {
    return {
      x: 142,
      y:this.height - 138,
    };
  }

  drawAnualFee() {
    let { x, y } = this.anualFeePos();
    switch (this.loanInfo["anual_fee"]) {
      case "YES":
        this.draw("X", x, y);
        break;
      case "NO":
        this.draw("X", 181 , y);
        break;
      default:
        break;
    }
  }
}
