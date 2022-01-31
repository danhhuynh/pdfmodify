import Builder from "./Builder.js";
let heso = 0.74;
export default class OccupationInfoDrawing extends Builder {
  constructor(config) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
  }

  drawCustom(message, x, y, size=12) {
    x *= heso;
    y = this.height - y * heso;
    this.draw(message, x, y, size);
  }

  sourceIncomePos() {
    return {
      x: 230,
      y: 285,
    };
  }

  drawSourceIncome() {
    let { x, y } = this.sourceIncomePos();
    this.drawCustom("X", x, y);
    this.drawCustom("X", x + 161, y);

    this.drawCustom("sadf askdhf adjksfhs dfda", x - 60, y + 38);
    this.drawCustom("sadf askdhf adjksfhs dfda", x -75, y + 76);

    this.drawCustom("X", 67, 397);
    this.drawCustom("X", 215, 397);
    this.drawCustom("123456789", 602, 400);
    this.drawCustom("123456789", 848, 400);

    this.drawCustom("4", 210, 437);
    this.drawCustom("5", 295, 437);
    this.drawCustom("Developer", 498, 437);
  }
  

  drawThongTinThuNhap() {
    this.drawCustom("TU Luong", 195, 520);

    this.drawCustom("X", 237, 600);
    this.drawCustom("X", 372, 600);
    this.drawCustom("24", 700, 600, 14);
  }

  drawSpouseInfo(){
    this.drawCustom("Nguyen Van A", 133, 696);
    this.drawCustom("0987654321", 461, 696);
    this.drawCustom("0987654321", 755, 696);

    this.drawCustom("sdf sad fas fsda", 152, 735);
    this.drawCustom("sdf sad fas fsda", 510, 735);
  }

  drawReferenceInfo(){
    this.drawCustom("Nguyen Van A", 147, 816);
    this.drawCustom("0987654321", 483, 816);
    this.drawCustom("Boss", 867, 816);

    this.drawCustom("Nguyen Van A", 147, 856);
    this.drawCustom("0987654321", 483, 856);
    this.drawCustom("Boss", 867, 856);
  }

  drawDebtInfo(){
    this.drawCustom("Nguyen Van A", 217, 946);
    this.drawCustom("23", 580, 946, 14);
    this.drawCustom("27", 844, 946, 14);

    this.drawCustom("1000000", 176, 981, 14);
    this.drawCustom("2000000", 663, 981, 14);
  }

  drawBankInfo(){
    this.drawCustom("Vietcombank", 164, 1080);
    this.drawCustom("QUan 1", 479, 1080);
    this.drawCustom("1234567890", 725, 1080);
  }

  drawNote(){
    this.drawCustom("X", 286, 1179);
    this.drawCustom("X", 440, 1179);

    this.drawCustom("X asddf  sa fasd fasds f fsd sad", 75, 1240);
  }
}
