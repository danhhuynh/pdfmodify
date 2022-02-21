import Builder from "./Builder.js";

export default class HeaderSectionDrawing extends Builder {
  constructor(config, leadInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.leadInfo = leadInfo;
  }

  numberContractPosition() {
    const { width, height } = this.page.getSize();
    return {
      x: 360,
      y: height - 66,
    };
  }

  drawNumberContract() {
    let { x, y } = this.numberContractPosition();
    this.draw("ISO123456789", x, y);
  }
}
