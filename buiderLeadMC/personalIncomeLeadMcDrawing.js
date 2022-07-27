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

    switch (this.leadInfo["job_title"]) {
      case "Công nhân":
        this.draw("X", x, y);
        break;
      case "Nhân viên công ty":
        this.draw("X", 208, y);
        break;
      case "Nội trợ":
        this.draw("X", 308, y);
        break;
      case "Công chức nhà nước":
        this.draw("X", 361, y);
        break;
      case "Quân nhân":
        this.draw("X", 476, y);
        break;
      case "Kinh doanh tự do":
        this.draw("X", 70, y - 14);
        break;
      case "Hưu trí":
        this.draw("X", 164, y - 14);
        break;
      case "Hộ kinh doanh cá thể":
        this.draw("X", 218, y - 14);
        break;
      case "Học sinh/sinh viên":
        this.draw("X", 335, y - 14);
        break;
      case "Phụ việc, giúp việc":
        this.draw("X", 439, y - 14);
        break;
      default:
        break;
    }
  }

  jobPositionPos() {
    return {
      x: 117,
      y: this.height - 600,
    };
  }

  drawjobPosition() {
    let { x, y } = this.jobPositionPos();
    switch (this.leadInfo["job_position"]) {
      case "Cán bộ quản lý":
        this.draw("X", x, y);
        break;
      case "Trưởng nhóm/Quản đốc":
        this.draw("X", 218, y);
        break;
      case "Nhân viên/Chuyên viên":
        this.draw("X", 362, y);
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
    this.draw(this.leadInfo["company_name"], x, y);
  }

  companyAddressPos() {
    return {
      x: 172,
      y: this.height - 626,
    };
  }

  drawCompanyAddress() {
    let { x, y } = this.companyAddressPos();
    this.draw(this.leadInfo["type_company_address"], x, y);
  }

  companyPhonePos() {
    return {
      x: 172,
      y: this.height - 654,
    };
  }

  drawCompanyPhone() {
    let { x, y } = this.companyPhonePos();
    this.draw(this.leadInfo["landline_company"], x, y);
  }

  companyTaxPos() {
    return {
      x: 255,
      y: this.height - 669,
    };
  }

  drawCompanyTax() {
    let { x, y } = this.companyTaxPos();
    this.draw(this.leadInfo["tax_code"], x, y);
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
    this.draw(this.leadInfo["main_income"], x, y);
  }

  labourContractPos() {
    return {
      x: 133,
      y: this.height - 699,
    };
  }

  drawlabourContract() {
    let { x, y } = this.labourContractPos();
    switch (this.leadInfo["labour_contract"]) {
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
    switch (this.leadInfo["get_salary_from"]) {
      case "Tiền mặt":
        this.draw("X", x, y);
        break;
      case "Qua tải khoản MB":
        this.draw("X", 253, y);
        break;
      case "TK ngân hàng":
        this.draw("X", 366, y);
        break;

      default:
        break;
    }
  }
}
