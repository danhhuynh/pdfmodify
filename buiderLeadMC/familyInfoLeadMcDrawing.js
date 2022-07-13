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
      x: 73,
      y: 772,
    };
  }

  drawRelationshipWithBorrower() {
    let { x, y } = this.relationshipWithBorrowerPos();
    switch (this.loanInfo["relationship_with_borrower"]) {
      case "Vợ/Chồng (Nếu đã kết hôn)":
        this.draw("X", x, y);
        break;
      case "Bố/mẹ (Nếu là sinh viên)":
        this.draw("X", x + 218, y);
        break;
      case "Khác":
        this.draw("X", 350, y);
        break;
      default:
        break;
    }
  }

  spouseNamePos() {
    return {
      x: 175,
      y: 55,
    };
  }

  drawSpouseName() {
    let { x, y } = this.spouseNamePos();
    this.draw(this.loanInfo["spouse_name"], x, y);
  }

  spouseDobPos() {
    return {
      x: 442,
      y: 54,
    };
  }

  drawSpouseDob() {
    let { x, y } = this.spouseDobPos();
    this.draw(this.loanInfo["spouse_dob"], x, y);
  }
  
  spouseCmndPos() {
    return {
      x: 441,
      y: 69,
    };
  }

  drawspouseCmnd() {
    let { x, y } = this.spouseCmndPos();
    this.draw(this.loanInfo["spouse_cmnd"], x, y);
  }

  spousePhonePos() {
    return {
      x: 175,
      y: 85,
    };
  }

  drawSpousePhone() {
    let { x, y } = this.spousePhonePos();
    this.draw(this.loanInfo["spouse_phone"], x, y);
  }

  spouseAddressPos() {
    return {
      x: 148,
      y: 100,
    };
  }

  drawSpouseAddress() {
    let { x, y } = this.spouseAddressPos();
    switch (this.loanInfo["spouse_address"]) {
      case "Giống với địa chỉ người cấp tín dụng":
        this.draw("X", x, y);
        break;
      case "Khác":
        this.draw("X", 330 , y);
        break;
      default:
        break;
    }
  }
}
