import Builder from "./Builder.js";
import { tsaCode } from "../utils/redis_cache.js";
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
    let mypromise = new Promise((resolve) => {
      tsaCode(this.leadInfo["tsa_code"]).then((val) => {
        this.draw(val, x, y);
        resolve("drawSaleCode Done");
      });
    });
    global.promiseStore.push(mypromise);
  }
}
