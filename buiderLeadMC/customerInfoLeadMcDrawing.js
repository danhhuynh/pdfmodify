import Builder from "./Builder.js";
import { city, getCityDistrictWard } from "../utils/redis_cache.js";
export default class customerInfoLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }
  // move 1 row + 28
  namePosition() {
    return {
      x: +10 + 120,
      y: this.height + 6 - 115,
    };
  }

  drawName() {
    let { x, y } = this.namePosition();
    this.draw(this.leadInfo["name"], x, y);
  }

  genderPosition() {
    return {
      x: 391,
      y: this.height + 6 - 132,
    };
  }

  drawGender() {
    let { x, y } = this.genderPosition();
    if (this.leadInfo["gender"] == "Male") {
      this.draw("X", x, y);
    } else {
      this.draw("X", 4 + 442, y);
    }
  }

  dateOfBirthPosition() {
    return {
      x: +10 + 122,
      y: this.height + 6 - 131,
    };
  }

  drawDob() {
    let { x, y } = this.dateOfBirthPosition();
    this.draw(this.leadInfo["date_of_birth"], x, y);
  }

  maritalStatusPos() {
    return {
      x: 186,
      y: this.height + 6 - 148,
    };
  }

  drawMaritalStatus() {
    let { x, y } = this.maritalStatusPos();

    switch (this.leadInfo["marital_status"]) {
      case "Độc thân":
        this.draw("X", 4 + x, y);
        break;
      case "Lập gia đình":
        this.draw("X", 6 + 263, y);
        break;
      case "Ly thân":
        this.draw("X", 4 + 356, y);
        break;
      case "Li dị":
        this.draw("X", 4 + 426, y);
        break;
      case "Góa":
        this.draw("X", 4 + 489, y);
        break;
      default:
        break;
    }
  }

  educationStatusPos() {
    return {
      x: 124,
      y: this.height + 5 - 162,
    };
  }

  drawEducationStatus() {
    let { x, y } = this.educationStatusPos();
    switch (this.leadInfo["education_status"]) {
      case "Trung cấp":
        this.draw("X", 4 + 203, y);
        break;
      case "Cao đẳng":
        this.draw("X", 4 + 276, y);
        break;
      case "Đại học":
        this.draw("X", 4 + 356, y);
        break;
      case "Sau đại học":
        this.draw("X", 4 + 429, y);
        break;
      default:
        this.draw("X", 4 + x, y);
        break;
    }
  }

  cmndPosition() {
    return {
      x: +10 + 190,
      y: this.height + 6 - 176,
    };
  }

  drawCmnd() {
    let { x, y } = this.cmndPosition();
    this.draw(this.leadInfo["cccd"], x, y);
  }

  phonePosition() {
    return {
      x: +10 + 137,
      y: this.height + 6 - 191,
    };
  }

  drawPhone() {
    let { x, y } = this.phonePosition();
    this.draw(this.leadInfo["phone"], x, y);
  }

  emailPosition() {
    return {
      x: +10 + 362,
      y: this.height + 6 - 191,
    };
  }

  drawEmail() {
    let { x, y } = this.emailPosition();
    this.draw(this.leadInfo["email"] || "", x, y);
  }

  currentAddressPosition() {
    return {
      x: +20 + 150,
      y: this.height + 4 - 204,
    };
  }
  // thuong tru
  drawCurrentAddress() {
    let { x, y } = this.currentAddressPosition();
    
    let mypromise = new Promise((resolve) => {
      if (
      this.leadInfo["type_of_residence_address"] ==
      "Giống với địa chỉ nơi ở hiện tại"
    ) {
        this.draw(this.leadInfo["detail_current_address"], x, y);
        getCityDistrictWard(
        this.leadInfo["current_city"],
          this.leadInfo["current_district"],
          this.leadInfo["current_ward"]
      ).then((val) => {
        this.draw(val[2] + " " + val[1] + " " + val[0], x - 80, y - 16);
        resolve("drawCurrentAddress Done");
      });
    }else{
      this.draw(this.leadInfo["detail_residence_address"], x, y);
      getCityDistrictWard(
        this.leadInfo["residence_city"],
          this.leadInfo["residence_district"],
          this.leadInfo["residence_ward"]
      ).then((val) => {
        this.draw(val[2] + " " + val[1] + " " + val[0], x - 80, y - 16);
        resolve("drawCurrentAddress Done");
      });
    }
      
    });
    global.promiseStore.push(mypromise);
  }

  residenceAddressPos() {
    return {
      x: +10 + 159,
      y: this.height + 6 - 239,
    };
  }

  drawingResidenceAddress() {
    let { x, y } = this.residenceAddressPos();
    if (
      this.leadInfo["type_of_residence_address"] ==
      "Giống với địa chỉ nơi ở hiện tại"
    ) {
      this.draw("X", x - 5, y);
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
            71,
            this.height + 6 - 251
          );
          resolve("drawingResidenceAddress Done");
        });
      });
      global.promiseStore.push(mypromise);
    } else {
      this.draw("X", x + 144, y);
      let mypromise = new Promise((resolve) => {
        getCityDistrictWard(
             this.leadInfo["current_city"],
          this.leadInfo["current_district"],
          this.leadInfo["current_ward"]
        ).then((val) => {
          this.draw(
            this.leadInfo["detail_current_address"] +
              " " +
              val[2] +
              " " +
              val[1] +
              " " +
              val[0],
            71,
            this.height + 6 - 252
          );
          resolve("drawingResidenceAddress Done");
        });
      });
      global.promiseStore.push(mypromise);
    }
  }

  timeLivingPos() {
    return {
      x: +12 + 248,
      y: this.height + 6 - 268,
    };
  }

  drawTimeLiving() {
    let { x, y } = this.timeLivingPos();
    this.draw(this.leadInfo["year_living"], x, y);
    this.draw(this.leadInfo["month_living"], x + 48, y);
  }

  accommodationStatusPos() {
    return {
      x: 165,
      y: this.height + 6 - 285,
    };
  }

  drawAccommodationStatus() {
    let { x, y } = this.accommodationStatusPos();
    switch (this.leadInfo["type_of_living"]) {
      case "Sở hữu":
        this.draw("X", x, y);
        break;
      case "Thuê":
        this.draw("X", 230 - 7, y);
        break;
      case "Nhà người thân":
        this.draw("X", 278 - 7, y);
        break;
      case "Sống với bố mẹ":
        this.draw("X", 335 - 11, y);
        break;
      case "Tại đơn vị đóng quân":
        this.draw("X", 433 - 10, y);
        break;
      default:
        break;
    }
  }
}
