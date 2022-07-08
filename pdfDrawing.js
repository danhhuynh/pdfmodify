import Builder from "./builder/Builder.js";
import { city } from "./utils/redis_cache.js";
export default class CustomerInfoDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }
  // move 1 row + 28
  namePosition() {
    return {
      x: 100,
      y: this.height - 230,
    };
  }

  drawName() {
    let { x, y } = this.namePosition();
    this.draw(this.leadInfo["name"], x, y);
  }

  genderPosition() {
    return {
      x: 107,
      y: this.height - 259,
    };
  }

  drawGender() {
    let { x, y } = this.genderPosition();
    if (this.leadInfo["gender"] == "Male") {
      this.draw("X", x, y);
    } else {
      this.draw("X", x + 46, y);
    }
  }

  dateOfBirthPosition() {
    return {
      x: this.width / 2 + 55,
      y: this.height - 258,
    };
  }

  drawDob() {
    let { x, y } = this.dateOfBirthPosition();
    let arrDob = this.leadInfo["date_of_birth"]
      ? this.leadInfo["date_of_birth"].split("/")
      : "";
    this.draw(arrDob[0], x, y);
    this.draw(arrDob[1], x + 30, y);
    this.draw(arrDob[2], x + 60, y);
  }

  cmndPosition() {
    return {
      x: 147,
      y: this.height - 285,
    };
  }

  drawCmnd() {
    let { x, y } = this.cmndPosition();
    this.draw(this.leadInfo["cccd"], x, y);
  }

  issueDateCmndPos() {
    return {
      x: this.width / 2 + 55,
      y: this.height - 285,
    };
  }

  drawIssueDateCmnd() {
    let { x, y } = this.issueDateCmndPos();
    let arrDate = this.leadInfo["date_issue_cmnd"]
      ? this.leadInfo["date_issue_cmnd"].split("/")
      : "";
    this.draw(arrDate[0], x, y);
    this.draw(arrDate[1], x + 30, y);
    this.draw(arrDate[2], x + 60, y);
  }

  issuePlaceCmndPos() {
    return {
      x: this.width / 2 + 215,
      y: this.height - 284,
    };
  }

  drawIssuePlaceCmnd() {
    let { x, y } = this.issuePlaceCmndPos();
    let fontSize = this.leadInfo["place_issue_cmnd"].length < 20 ? 11 : 6;
    this.draw(this.leadInfo["place_issue_cmnd"], x, y, fontSize);
  }

  oldCmndPosition() {
    return {
      x: 155,
      y: this.height - 309,
    };
  }

  drawOldCmnd() {
    let { x, y } = this.oldCmndPosition();
    this.draw(this.leadInfo["old_cmnd"] || "", x, y);
  }

  maritalStatusPos() {
    return {
      x: 167,
      y: this.height - 338,
    };
  }

  drawMaritalStatus() {
    let { x, y } = this.maritalStatusPos();
    switch (this.leadInfo["marital_status"]) {
      case "Độc thân":
        this.draw("X", x, y);
        break;
      case "Lập gia đình":
        this.draw("X", x + 94, y);
        break;
      case "Góa bụa":
        this.draw("X", x + 94 * 2, y);
        break;
      case "Li dị":
        this.draw("X", x + 94 * 3, y);
        break;

      default:
        break;
    }
  }

  educationStatusPos() {
    return {
      x: 167,
      y: this.height - 364,
    };
  }

  drawEducationStatus() {
    let { x, y } = this.educationStatusPos();
    switch (this.leadInfo["education_status"]) {
      case "Tiểu học":
        this.draw("X", x, y);
        break;
      case "THCS":
        this.draw("X", x + 94, y);
        break;
      case "THPT":
        this.draw("X", x + 94 * 2, y);
        break;
      case "Trung cấp":
        this.draw("X", x + 94 * 3, y);
        break;

      default:
        break;
    }
    //next row
    let y2 = y - 25;
    switch (this.leadInfo["education_status"]) {
      case "Cao đẳng":
        this.draw("X", x, y2);
        break;
      case "Đại học":
        this.draw("X", x + 94, y2);
        break;
      case "Sau đại học":
        this.draw("X", x + 94 * 2, y2);
        break;
      case "Khác":
        this.draw("X", x + 94 * 3, y2);
        break;

      default:
        break;
    }
  }

  phonePosition() {
    return {
      x: 100,
      y: this.height - 417,
    };
  }

  drawPhone() {
    let { x, y } = this.phonePosition();
    this.draw(this.leadInfo["phone"], x, y);
  }

  emailPosition() {
    return {
      x: 305,
      y: this.height - 417,
    };
  }

  drawEmail() {
    let { x, y } = this.emailPosition();
    this.draw(this.leadInfo["email"] || "", x, y);
  }

  dependencePeoplePosition() {
    return {
      x: 655,
      y: this.height - 417,
    };
  }

  drawDependencePeople() {
    let { x, y } = this.dependencePeoplePosition();
    this.draw(this.leadInfo["people_dependent"], x, y);
  }
}
