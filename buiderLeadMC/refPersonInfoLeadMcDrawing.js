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
      x: 210 + 10,
      y: this.height - 4 - 291,
    };
  }

  drawRef1Name() {
    let { x, y } = this.ref1NamePos();
    this.draw(this.leadInfo["ref_1_name"], x, y);
  }

  ref1TypePos() {
    return {
      x: 275 + 12,
      y: this.height - 4 - 306,
    };
  }

  drawRef1Type() {
    let { x, y } = this.ref1TypePos();
    this.draw(this.leadInfo["ref_1_type"], x, y);
  }

  ref1PhonePos() {
    return {
      x: 433,
      y: this.height - 4 - 306,
    };
  }

  drawRef1Phone() {
    let { x, y } = this.ref1PhonePos();
    this.draw(this.leadInfo["ref_1_phone"], x, y);
  }

  ref2NamePos() {
    return {
      x: 212 + 10,
      y: this.height - 4 - 322,
    };
  }

  drawRef2Name() {
    let { x, y } = this.ref2NamePos();
    this.draw(this.leadInfo["ref_2_name"], x, y);
  }

  ref2TypePos() {
    return {
      x: 272 + 15,
      y: this.height - 5 - 334,
    };
  }

  drawRef2Type() {
    let { x, y } = this.ref2TypePos();
    this.draw(this.leadInfo["ref_2_type"], x, y);
  }

  ref2PhonePos() {
    return {
      x: 433,
      y: this.height - 5 - 333,
    };
  }

  drawRef2Phone() {
    let { x, y } = this.ref2PhonePos();
    this.draw(this.leadInfo["ref_2_phone"], x, y);
  }
}
