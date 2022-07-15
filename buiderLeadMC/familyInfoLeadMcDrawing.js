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
      y:this.height - 775,
    };
  }

  drawRelationshipWithBorrower() {
    let { x, y } = this.relationshipWithBorrowerPos();
    switch (this.loanInfo["relationship_with_borrower"]) {
      case "Vợ/Chồng (Nếu đã kết hôn)":
        this.draw("X", x, y);
        break;
      case "Bố/mẹ (Nếu là sinh viên)":
        this.draw("X", 215, y);
        break;
      case "Khác":
        this.draw("X", 347, y);
        break;
      default:
        break;
    }
  }

  spouseNamePos() {
    return {
      x: 175,
      y:this.height - 58,
    };
  }

  drawSpouseName() {
    let { x, y } = this.spouseNamePos();
    this.draw(this.loanInfo["spouse_name"], x, y);

  }

  spouseDobPos() {
    return {
      x: 442,
      y:this.height - 55,
    };
  }

  drawSpouseDob() {
    let { x, y } = this.spouseDobPos();
    this.draw(this.loanInfo["spouse_dob"], x, y);

  }
  
  spouseCmndPos() {
    return {
      x: 441,
      y:this.height - 70,
    };
  }

  drawspouseCmnd() {
    let { x, y } = this.spouseCmndPos();
    this.draw(this.loanInfo["spouse_cmnd"], x, y);

  }

  spousePhonePos() {
    return {
      x: 175,
      y:this.height - 86,
    };
  }

  drawSpousePhone() {
    let { x, y } = this.spousePhonePos();
    this.draw(this.loanInfo["spouse_phone"], x, y);
    
  }

  spouseAddressPos() {
    return {
      x: 144,
      y:this.height - 103,
    };
  }

  drawSpouseAddress() {
    let { x, y } = this.spouseAddressPos();
    
    switch (this.loanInfo["spouse_address"]) {
      case "Giống với địa chỉ người cấp tín dụng":
        this.draw("X", x, y);
        break;
      case "Khác":
        this.draw("X", 326 , y);
        break;
      default:
        break;
    }
  }
}
