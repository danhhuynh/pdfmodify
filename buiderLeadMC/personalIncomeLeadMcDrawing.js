import Builder from "./Builder.js";
import { tsaCode } from "../utils/redis_cache.js";
export default class personalIncomeLeadMcDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  jobTitlePos() {
    return {
      x: 141,
      y: this.height - 572,
    };
  }

  drawJobTitle() {
    let { x, y } = this.jobTitlePos();
    // this.draw("X", x, y);
    // this.draw("X", 208, y);
    // this.draw("X", 308, y);
    // this.draw("X", 361, y);
    // this.draw("X", 472, y);
    // this.draw("X", 70, y - 14);
    // this.draw("X", 164, y - 14);
    // this.draw("X", 218, y - 14);
    // this.draw("X", 335, y - 14);
    // this.draw("X", 440, y - 14);
    switch (this.loanInfo["job_title"]) {
      case "Công nhân":
        this.draw("X", x, y);
        break;
      case "Nhân viên công ty":
        this.draw("X", 210, y);
        break;
      case "Nội chợ":
        this.draw("X", 311, y);
        break;
      case "Công chức nhà nước":
        this.draw("X", 365, y);
        break;
      case "Quân nhân":
        this.draw("X", 479, y);
        break;
      case "Kinh doanh tự do":
        this.draw("X", 75, y + 13);
        break;
      case "Hưu trí":
        this.draw("X", 168, y + 13);
        break;
      case "Hộ kinh doanh cá thể":
        this.draw("X", 222, y + 13);
        break;
      case "Học sinh/sinh viên":
        this.draw("X", 339, y + 13);
        break;
      case "Phụ việc, giúp việc":
        this.draw("X", 442, y + 13);
        break;
      default:
        break;
    }
  }

  jobPositionPos() {
    return {
      x: 116,
      y: this.height - 600,
    };
  }

  drawjobPosition() {
    let { x, y } = this.jobPositionPos();
    switch (this.loanInfo["job_position"]) {
      case "Cán bộ quản lý":
        this.draw("X", x, y);
        break;
      case "Trưởng nhóm/Quản đốc":
        this.draw("X", 217, y);
        break;
      case "Nhân viên/Chuyên viên":
        this.draw("X", 363, y);
        break;

      default:
        break;
    }
  }

  typeCompanyNamePos() {
    return {
      x: 245,
      y: this.height - 611,
    };
  }

  drawTypeCompanyName() {
    let { x, y } = this.typeCompanyNamePos();
    this.draw(this.loanInfo["company_name"], x, y);
  }

  companyAddressPos() {
    return {
      x: 172,
      y: this.height - 626,
    };
  }

  drawCompanyAddress() {
    let { x, y } = this.companyAddressPos();
    this.draw(this.loanInfo["type_company_address"], x, y);
  }

  companyPhonePos() {
    return {
      x: 172,
      y: this.height - 654,
    };
  }

  drawCompanyPhone() {
    let { x, y } = this.companyPhonePos();
    this.draw(this.loanInfo["landline_company"], x, y);
  }

  companyTaxPos() {
    return {
      x: 255,
      y: this.height - 669,
    };
  }

  drawCompanyTax() {
    let { x, y } = this.companyTaxPos();
    this.draw(this.loanInfo["tax_code"], x, y);
  }

  timeWorkingPos() {
    return {
      x: 210,
      y: this.height - 683,
    };
  }

  drawTimeWorking() {
    let { x, y } = this.timeWorkingPos();
    this.draw(this.leadInfo["years_working"], x, y);
    this.draw(this.leadInfo["months_working"], x + 40, y);
  }

  mainIncomePos() {
    return {
      x: 485,
      y: this.height - 683,
    };
  }

  drawMainIncome() {
    let { x, y } = this.mainIncomePos();
    this.draw(this.loanInfo["main_income"], x, y);
  }

  labourContractPos() {
    return {
      x: 133,
      y: this.height - 699,
    };
  }

  drawlabourContract() {
    let { x, y } = this.labourContractPos();
    switch (this.loanInfo["labour_contract"]) {
      case "<1 năm (Thời vụ)":
        this.draw("X", x, y);
        break;
      case "<1 năm (Học việc, Thử việc)":
        this.draw("X", 282, y);
        break;
      case "1-3 năm":
        this.draw("X", x, y - 13);
        break;
      case "Không xác định thời hạn":
        this.draw("X", 283, y - 13);
        break;
      default:
        break;
    }
  }

  getSalaryFromPos() {
    return {
      x: 183,
      y: this.height - 729,
    };
  }

  drawgetSalaryFrom() {
    let { x, y } = this.getSalaryFromPos();
    switch (this.loanInfo["get_salary_from"]) {
      case "Tiền mặt":
        this.draw("X", x, y);
        break;
      case "Qua tải khoản MB":
        this.draw("X", 253, y);
        break;
      case "Qua tài khoản Ngân hàng khác":
        this.draw("X", 367, y);
        break;

      default:
        break;
    }
  }
}
