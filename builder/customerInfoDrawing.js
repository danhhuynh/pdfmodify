import Builder from "./Builder.js";

export default class CustomerInfoDrawing extends Builder {
  constructor(config) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
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
    this.draw("Huỳnh Thanh Danh", x, y);
  }

  genderPosition() {
    return {
      x: 107,
      y: this.height - 258,
    };
  }

  drawGender() {
    let { x, y } = this.genderPosition();
    this.draw("X", x, y);
  }

  dateOfBirthPosition() {
    return {
      x: this.width / 2 + 55,
      y: this.height - 258,
    };
  }

  drawDob() {
    let { x, y } = this.dateOfBirthPosition();
    this.draw("27", x, y);
    this.draw("09", x + 30, y);
    this.draw("1996", x + 60, y);
  }

  cmndPosition() {
    return {
      x: 147,
      y: this.height - 285,
    };
  }

  drawCmnd() {
    let { x, y } = this.cmndPosition();
    this.draw("301558045", x, y);
  }

  issueDateCmndPos() {
    return {
      x: this.width / 2 + 55,
      y: this.height - 285,
    };
  }

  drawIssueDateCmnd() {
    let { x, y } = this.issueDateCmndPos();
    this.draw("27", x, y);
    this.draw("09", x + 30, y);
    this.draw("1996", x + 60, y);
  }

  issuePlaceCmndPos() {
    return {
      x: this.width / 2 + 215,
      y: this.height - 284,
    };
  }

  drawIssuePlaceCmnd() {
    let { x, y } = this.issuePlaceCmndPos();
    this.draw("Long An", x, y);
  }

  oldCmndPosition() {
    return {
      x: 155,
      y: this.height - 309,
    };
  }

  drawOldCmnd() {
    let { x, y } = this.oldCmndPosition();
    this.draw("301558045", x, y);
  }

  maritalStatusPos() {
    return {
      x: 167,
      y: this.height - 338,
    };
  }

  drawMaritalStatus() {
    let { x, y } = this.maritalStatusPos();
    this.draw("X", x, y);
    this.draw("X", x + 94, y);
    this.draw("X", x + 94 * 2, y);
    this.draw("X", x + 94 * 3, y);
  }

  educationStatusPos() {
    return {
      x: 167,
      y: this.height - 364,
    };
  }

  drawEducationStatus() {
    let { x, y } = this.educationStatusPos();
    let temp = 94;
    this.draw("X", x, y);
    this.draw("X", x + 94, y);
    this.draw("X", x + 94 * 2, y);
    this.draw("X", x + 94 * 3, y);
    //next row
    let y2 = y - 25;
    this.draw("X", x, y2);
    this.draw("X", x + 94, y2);
    this.draw("X", x + 94 * 2, y2);
    this.draw("X", x + 94 * 3, y2);
  }

  phonePosition() {
    return {
      x: 100,
      y: this.height - 417,
    };
  }

  drawPhone() {
    let { x, y } = this.phonePosition();
    this.draw("0969228201", x, y);
  }
  
  emailPosition() {
    return {
      x: 305,
      y: this.height - 417,
    };
  }

  drawEmail() {
    let { x, y } = this.emailPosition();
    this.draw("danhhuynh2709@gmail.com", x, y);
  }
  
  dependencePeoplePosition() {
    return {
      x: 655,
      y: this.height - 417,
    };
  }

  drawDependencePeople() {
    let { x, y } = this.dependencePeoplePosition();
    this.draw("5", x, y);
  }
}