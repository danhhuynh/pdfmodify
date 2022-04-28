import Builder from "./Builder.js";
import {
  city,
  district,
  ward,
  bank_name,
  getCityDistrictWard,
} from "../utils/redis_cache.js";

let heso = 0.74;
export default class OccupationInfoDrawing extends Builder {
  constructor(config, loanInfo) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
    this.loanInfo = loanInfo;
    this.leadInfo = loanInfo["customer"];
  }

  drawCustom(message, x, y, size = 11) {
    x *= heso;
    y = this.height - y * heso;
    this.draw(message, x, y, size);
  }

  sourceIncomePos() {
    return {
      x: 230,
      y: 285,
    };
  }

  drawSourceIncome() {
    let { x, y } = this.sourceIncomePos();
    switch (this.leadInfo["source_income"]) {
      case "Từ lương":
        this.drawCustom("X", x, y);
        break;
      case "Từ kinh doanh":
        this.drawCustom("X", x + 161, y);
        break;

      default:
        break;
    }

    this.drawCustom(this.leadInfo["company_name"], x - 60, y + 38);
    let company_address = this.leadInfo["company_address"] || "";
    let mypromise = new Promise((resolve) => {
      getCityDistrictWard(
        this.leadInfo["work_city"],
        this.leadInfo["work_district"],
        this.leadInfo["work_ward"]
      ).then((val) => {
        this.drawCustom(
          company_address + " " + val[2] + " " + val[1] + " " + val[0],
          x - 75,
          y + 76
        );
        resolve("drawSourceIncome Done");
      });
    });
    global.promiseStore.push(mypromise);

    switch (this.leadInfo["type_company_address"]) {
      case "Trụ sở chính":
        this.drawCustom("X", 67, 397);
        break;
      case "Trụ sở chính":
        this.drawCustom("X", 215, 397);
        break;

      default:
        break;
    }

    this.drawCustom(this.leadInfo["tax_code"], 602, 400);
    this.drawCustom(this.leadInfo["landline_company"], 848, 400);

    this.drawCustom(this.leadInfo["years_working"], 210, 437);
    this.drawCustom(this.leadInfo["months_working"], 295, 437);
    this.drawCustom(this.leadInfo["job_title"], 498, 437);
  }

  drawThongTinThuNhap() {
    this.drawCustom(this.leadInfo["main_income"], 195, 520);
    this.drawCustom(this.leadInfo["other_income"], 680, 520, 14);

    switch (this.leadInfo["get_salary_from"]) {
      case "TK ngân hàng":
        this.drawCustom("X", 237, 600);
        break;
      case "Tiền mặt":
        this.drawCustom("X", 372, 600);
        break;

      default:
        break;
    }
    this.drawCustom(this.leadInfo["date_get_salary"], 700, 600, 14);
  }

  drawSpouseInfo() {
    this.drawCustom(this.leadInfo["spouse_name"], 133, 696);
    this.drawCustom(this.leadInfo["spouse_cmnd"], 461, 696);
    this.drawCustom(this.leadInfo["spouse_phone"], 755, 696);

    this.drawCustom(this.leadInfo["spouse_company"], 152, 735);
    this.drawCustom(this.leadInfo["spouse_company_address"], 510, 735);
  }

  drawReferenceInfo() {
    this.drawCustom(this.leadInfo["ref_1_name"], 147, 816);
    this.drawCustom(this.leadInfo["ref_1_phone"], 483, 816);
    this.drawCustom(this.leadInfo["ref_1_type"], 867, 816);

    this.drawCustom(this.leadInfo["ref_2_name"], 147, 856);
    this.drawCustom(this.leadInfo["ref_2_phone"], 483, 856);
    this.drawCustom(this.leadInfo["ref_2_type"], 867, 856);
  }

  drawDebtInfo() {
    this.drawCustom(this.leadInfo["host_debt"], 217, 946);
    this.drawCustom(this.leadInfo["debt_due_date"], 580, 946);
    this.drawCustom(this.leadInfo["debt_start_date"], 844, 946);

    this.drawCustom(this.leadInfo["current_debt_left"], 176, 981);
    this.drawCustom(this.leadInfo["montly_payment_debt"], 663, 981);
  }

  drawBankInfo() {
    // let key_find_bank =
    //   this.leadInfo["bank_name"] +
    //   (this.leadInfo["bank_branch"]
    //     ? " - " + this.leadInfo["bank_branch"]
    //     : "");
    // bank_name(key_find_bank).then((res) => this.drawCustom(res, 164, 1080));
    let myfont = this.leadInfo["bank_name"]. length < 35 ? 10 : 7;
    this.drawCustom(this.leadInfo["bank_name"], 162, 1080, myfont);
    this.drawCustom(this.leadInfo["bank_branch"], 479, 1080);
    this.drawCustom(this.leadInfo["bank_no"], 725, 1080);
  }

  drawNote() {
    if (this.leadInfo["secure_info_with" == "Người thân"]) {
      this.drawCustom("X", 286, 1180);
    } else {
      this.drawCustom("X", 439, 1180);
    }

    this.drawCustom(this.leadInfo["detail_note"], 75, 1240);
  }
}
