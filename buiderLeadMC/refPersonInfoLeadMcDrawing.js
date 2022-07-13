import Builder from "./Builder.js";

export default class refPersonInfoLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  ref1NamePos() {
    return {
      x: 210,
      y: 288,
    };
  }

  drawRef1Name() {
    let { x, y } = this.ref1NamePos();
    this.draw(this.loanInfo["ref_1_name"], x, y);
  }

  ref1TypePos() {
    return {
      x: 275,
      y: 304,
    };
  }

  drawRef1Type() {
    let { x, y } = this.ref1TypePos();
    this.draw(this.loanInfo["ref_1_type"], x, y);
  }

  ref1PhonePos() {
    return {
      x: 433,
      y: 304,
    };
  }

  drawRef1Phone() {
    let { x, y } = this.ref1PhonePos();
    this.draw(this.loanInfo["ref_1_phone"], x, y);
  }
  
  ref2NamePos() {
    return {
      x: 212,
      y: 320,
    };
  }

  drawRef2Name() {
    let { x, y } = this.ref2NamePos();
    this.draw(this.loanInfo["ref_2_name"], x, y);
  }

  ref2TypePos() {
    return {
      x: 272,
      y: 331,
    };
  }

  drawRef2Type() {
    let { x, y } = this.ref2TypePos();
    this.draw(this.loanInfo["ref_2_type"], x, y);
  }

  ref2PhonePos() {
    return {
      x: 433,
      y: 331,
    };
  }

  drawRef2Phone() {
    let { x, y } = this.ref2PhonePos();
    this.draw(this.loanInfo["ref_2_phone"], x, y);
  }
}
