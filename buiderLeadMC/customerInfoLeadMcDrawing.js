import Builder from "./Builder.js";
import { city } from "../utils/redis_cache.js";
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
      x: 120,
      y: 113,
    };
  }

  drawName() {
    let { x, y } = this.namePosition();
    this.draw(this.leadInfo["name"], x, y);
  }

  genderPosition() {
    return {
      x: 395,
      y: 128,
    };
  }

  drawGender() {
    let { x, y } = this.genderPosition();
    if (this.leadInfo["gender"] == "Male") {
      this.draw("X", x, y);
    } else {
      this.draw("X", x + 60, y);
    }
  }

  dateOfBirthPosition() {
    return {
      x: 120,
      y: 128,
    };
  }

  drawDob() {
    let { x, y } = this.dateOfBirthPosition();
    this.draw(this.leadInfo["date_of_birth"], x, y);
    
  }

  maritalStatusPos() {
    return {
      x: 189,
      y: 145,
    };
  }

  drawMaritalStatus() {
    let { x, y } = this.maritalStatusPos();
    switch (this.leadInfo["marital_status"]) {
      case "Độc thân":
        this.draw("X", x, y);
        break;
      case "Đã kết hôn":
        this.draw("X", x + 97, y);
        break;
      case "Ly thân":
        this.draw("X", x + 91 + 97, y);
        break;
      case "Li hôn":
        this.draw("X", x + 91 + 97 + 36, y);
        break;
        case "Góa":
          this.draw("X", x + 91 + 97 + 36 + 64, y);
          break;
      default:
        break;
    }
  }

  educationStatusPos() {
    return {
      x: 127,
      y: 160,
    };
  }

  drawEducationStatus() {
    let { x, y } = this.educationStatusPos();
    switch (this.leadInfo["education_status"]) {
      case "Phổ thông":
        this.draw("X", x, y);
        break;
      case "Trung cấp":
        this.draw("X", x + 80, y);
        break;
      case "Cao đẳng":
        this.draw("X", x + 80 + 73, y);
        break;
      case "Đại học":
        this.draw("X", x + 80 * 2 + 73, y);
        break;
      case "Sau đại học":
        this.draw("X", x + 94 * 2 + 73 *2, y);
        break;
      default:
        break;
    }
  }

  cmndPosition() {
    return {
      x: 189,
      y: 175,
    };
  }

  drawCmnd() {
    let { x, y } = this.cmndPosition();
    this.draw(this.leadInfo["cccd"], x, y);
  }

  phonePosition() {
    return {
      x: 135,
      y: 189,
    };
  }

  drawPhone() {
    let { x, y } = this.phonePosition();
    this.draw(this.leadInfo["phone"], x, y);
  }

  emailPosition() {
    return {
      x: 360,
      y: 189,
    };
  }

  drawEmail() {
    let { x, y } = this.emailPosition();
    this.draw(this.leadInfo["email"] || "", x, y);
  }

  currentAddressPosition() {
    return {
      x: 185,
      y: 206,
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

  residenceAddressPos() {
    return {
      x: 163,
      y: 236,
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
            71,
            251
          );
          resolve("drawingResidenceAddress Done");
        });
      });
      global.promiseStore.push(mypromise);
    } else {
      this.draw("X", x + 146, y);
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
              71,
              251
          );
          resolve("drawingResidenceAddress Done");
        });
      });
      global.promiseStore.push(mypromise);
    }
  }

  timeLivingPos() {
    return {
      x: 248,
      y: 266,
    };
  }

  drawTimeLiving() {
    let { x, y } = this.LivingPos();
    this.draw(this.leadInfo["year_living"] , x, y);
    this.draw(this.leadInfo["month_living"] , x + 48, y);
  }

  accommodationStatusPos() {
    return {
      x: this.width / 2 + 55,
      y: this.height - 285,
    };
  }

  drawAccommodationStatus() {
    let { x, y } = this.accommodationStatusPos();
    switch (this.leadInfo["type_of_living"]) {
      case "Sở hữu":
        this.draw("X", x, y);
        break;
      case "Thuê":
        this.draw("X", x + 80, y);
        break;
      case "Ở nhờ":
        this.draw("X", x + 80 + 73, y);
        break;
      case "Sống với bố mẹ":
        this.draw("X", x + 80 * 2 + 73, y);
        break;
      case "Tại đơn vị đóng quân":
        this.draw("X", x + 94 * 2 + 73 *2, y);
        break;
      default:
        break;
    }
  }


}
