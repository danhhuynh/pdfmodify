export default class Builder {
  constructor(page, font, fontSize, color) {
    this.page = page;
    this.font = font;
    this.size = fontSize;
    this.color = color;
    const { width, height } = this.page.getSize();
    this.width = width;
    this.height = height;
  }

  draw(text, x, y, customSize = "", customFont = "", customColor = "") {
    let size = customSize || this.size;
    let font = customFont || this.font;
    let color = customColor || this.color;
    if (!text) {
      text = "";
    }
    this.page.drawText(text, {
      x: x,
      y: y,
      size: size,
      font: font,
      color: color,
    });
  }
}
