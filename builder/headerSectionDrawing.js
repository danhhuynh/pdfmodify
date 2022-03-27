import Builder from "./Builder.js";

export default class HeaderSectionDrawing extends Builder {
  constructor(config, leadInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.leadInfo = leadInfo;
  }

  saleCodePos() {
    const { width, height } = this.page.getSize();
    return {
      x: 360,
      y: height - 91,
    };
  }

  drawSaleCode() {
    let { x, y } = this.saleCodePos();
    this.draw(this.leadInfo["tsa_code"], x, y);
  }
}
