import Builder from "./Builder.js";

export default class ResidenceInfoDrawing extends Builder {
  constructor(config) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
  }

  currentAddressPosition() {
    return {
      x: 169,
      y: this.height - 488,
    };
  }

  drawCurrentAddress() {
    let { x, y } = this.currentAddressPosition();
    this.draw("Hộ 1 tổ 9 ấp 4 xã Phú Xuân Nhà Bè", x, y);
  }
  
  livingPosition() {
    return {
      x: 165,
      y: this.height - 510,
    };
  }

  drawLivingInfo() {
    let { x, y } = this.livingPosition();
    this.draw("4", x, y);
    this.draw("11", x + 52, y);
    this.draw("2", x + 250, y);
    this.draw("0969228201", x + 400, y);
  }
  
  statusPropertyPos() {
    return {
      x: 221,
      y: this.height - 534,
    };
  }

  drawingStatusProperty() {
    let { x, y } = this.statusPropertyPos();
    this.draw("X", x, y);
    this.draw("X", x + 78, y);
    this.draw("X", x +74*2, y);
    this.draw("X", x +262, y);
  }
  
  rentedHousePos() {
    return {
      x: 155,
      y: this.height - 586,
    };
  }

  drawingRentedHouse() {
    let { x, y } = this.rentedHousePos();
    this.draw("Huynh than hdanh", x, y);
    this.draw("X", x + 192, y+1);
    this.draw("X", x +307, y+1);
    this.draw("29", x +455, y);
    //Road
    this.draw("df asdf sa sa fsa fsd as fs fd", x, y - 27);
  }
  
  residenceAddressPos() {
    return {
      x: 145,
      y: this.height - 634,
    };
  }

  drawingResidenceAddress() {
    let { x, y } = this.residenceAddressPos();
    this.draw("X", x, y);
    this.draw("X", x + 189, y);
    this.draw("sdf sad sjadh fgjsadgdgsakjsf fas", x, y - 25);
    this.draw("123456", x, y-50);
    this.draw("0987654321", x + 270, y-50);
    this.draw("sadf asdsdkf hiewuhjkasdfd fas ", x, y-75);
  }
}
