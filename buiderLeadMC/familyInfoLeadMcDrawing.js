import Builder from "./Builder.js";

export default class familyInfoLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  relationshipWithBorrowerPos() {
    return {
      x: 70,
      y: this.height - 775,
    };
  }

  drawRelationshipWithBorrower() {
    let { x, y } = this.relationshipWithBorrowerPos();
    switch (this.leadInfo["relationship_with_borrower"]) {
      case "Vợ/Chồng (Nếu đã kết hôn)":
        this.draw("X", x, y);
        break;
      case "Bố/mẹ (Nếu là sinh viên)":
        this.draw("X", 223, y);
        break;
      default:
        this.draw("X", 362, y);
        this.draw(this.leadInfo["relationship_with_borrower"], 441, y);
        break;
    }
  }

  spouseNamePos() {
    return {
      x: 178,
      y: this.height - 58,
    };
  }

  drawSpouseName() {
    let { x, y } = this.spouseNamePos();
    this.draw(this.leadInfo["spouse_name"], x, y);
  }

  spouseDobPos() {
    return {
      x: 442,
      y: this.height - 56,
    };
  }

  drawSpouseDob() {
    let { x, y } = this.spouseDobPos();
    this.draw(this.leadInfo["spouse_dob"], x, y);
  }

  spouseCmndPos() {
    return {
      x: 465,
      y: this.height - 71,
    };
  }

  drawspouseCmnd() {
    let { x, y } = this.spouseCmndPos();
    this.draw(this.leadInfo["spouse_cmnd"], x, y);
  }

  spousePhonePos() {
    return {
      x: 177,
      y: this.height - 87,
    };
  }

  drawSpousePhone() {
    let { x, y } = this.spousePhonePos();
    this.draw(this.leadInfo["spouse_phone"], x, y);
  }

  spouseAddressPos() {
    return {
      x: 150,
      y: this.height - 103,
    };
  }

  drawSpouseAddress() {
    let { x, y } = this.spouseAddressPos();

    switch (this.leadInfo["spouse_address"]) {
      case "Giống với địa chỉ người cấp tín dụng":
        this.draw("X", x, y);
        break;
      default:
        this.draw("X", 338, y);
        this.draw(this.leadInfo["spouse_address"], x - 60, y - 14);
        break;
    }
  }
}
