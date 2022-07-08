import Builder from "./Builder.js";
import {
  city,
  district,
  ward,
  getCityDistrictWard,
} from "../utils/redis_cache.js";

export default class ResidenceInfoDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  currentAddressPosition() {
    return {
      x: 169,
      y: this.height - 488,
    };
  }

  drawCurrentAddress() {
    let { x, y } = this.currentAddressPosition();
    let mypromise = new Promise((resolve) => {
      getCityDistrictWard(
        this.leadInfo["current_city"],
        this.leadInfo["current_district"],
        this.leadInfo["current_ward"]
      ).then((val) => {
        console.log(val);
        this.draw(
          this.leadInfo["detail_current_address"] +
            "  " +
            val[2] +
            " " +
            val[1] +
            " " +
            val[0],
          x,
          y
        );
        resolve("drawCurrentAddress Done");
      });
    });
    global.promiseStore.push(mypromise);
  }

  livingPosition() {
    return {
      x: 165,
      y: this.height - 510,
    };
  }

  drawLivingInfo() {
    let { x, y } = this.livingPosition();
    this.draw(this.leadInfo["year_living"], x, y);
    this.draw(this.leadInfo["month_living"], x + 52, y);
    this.draw(this.leadInfo["number_people_live_together"], x + 250, y);
    this.draw(this.leadInfo["landline_current"], x + 400, y);
  }

  statusPropertyPos() {
    return {
      x: 221,
      y: this.height - 534,
    };
  }

  drawingStatusProperty() {
    let { x, y } = this.statusPropertyPos();
    switch (this.leadInfo["type_of_living"]) {
      case "Sở hữu":
        this.draw("X", x, y);
        break;
      case "Thuê":
        this.draw("X", x + 78, y);
        break;
      case "Nhà người thân":
        this.draw("X", x + 74 * 2, y);
        break;
      default:
        break;
    }
    // this.draw("X", x + 262, y); khac
  }

  rentedHousePos() {
    return {
      x: 155,
      y: this.height - 586,
    };
  }

  drawingRentedHouse() {
    let { x, y } = this.rentedHousePos();
    this.draw(this.leadInfo["host_name"], x, y);
    if (this.leadInfo["type_of_renting"] == "Thuê nguyên căn") {
      this.draw("X", x + 192, y + 1);
    } else if (this.leadInfo["type_of_renting"] == "Thuê phòng trọ") {
      this.draw("X", x + 307, y + 1);
    }
    this.draw(this.leadInfo["room_no"], x + 455, y);
    //Road
    this.draw(this.leadInfo["describe_routing_rented_house"], x, y - 27);
  }

  residenceAddressPos() {
    return {
      x: 145,
      y: this.height - 634,
    };
  }

  drawingResidenceAddress() {
    let { x, y } = this.residenceAddressPos();
    if (
      this.leadInfo["type_of_residence_address"] ==
      "Giống với địa chỉ nơi ở hiện tại"
    ) {
      this.draw("X", x, y);
      let mypromise = new Promise((resolve) => {
        getCityDistrictWard(
          this.leadInfo["current_city"],
          this.leadInfo["current_district"],
          this.leadInfo["current_ward"]
        ).then((val) => {
          this.draw(
            this.leadInfo["detail_current_address"] +
              val[2] +
              " " +
              val[1] +
              " " +
              val[0],
            x,
            y - 25
          );
          resolve("drawingResidenceAddress Done");
        });
      });
      global.promiseStore.push(mypromise);
    } else {
      this.draw("X", x + 189, y);
      let mypromise = new Promise((resolve) => {
        getCityDistrictWard(
          this.leadInfo["residence_city"],
          this.leadInfo["residence_district"],
          this.leadInfo["residence_ward"]
        ).then((val) => {
          this.draw(
            this.leadInfo["detail_residence_address"] +
              " " +
              val[2] +
              " " +
              val[1] +
              " " +
              val[0],
            x,
            y - 25
          );
          resolve("drawingResidenceAddress Done");
        });
      });
      global.promiseStore.push(mypromise);
    }

    this.draw(this.leadInfo["house_hold_book_no"], x, y - 50);
    this.draw(this.leadInfo["landline_residence"], x + 270, y - 50);
    this.draw(this.leadInfo["detail_residence_address"], x, y - 75);
  }
}
