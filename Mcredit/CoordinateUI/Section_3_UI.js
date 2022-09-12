import {
  CHUCVU,
  labour_contract,
  NGHENGHIEP,
  salary_payment_channel,
} from "../coordinate/Section3.js";

export default function genArrPoint(data) {
  return [
    //THÔNG TIN VIỆC LÀM VÀ THU NHẬP
    //Line 1
    {
      text: "X",
      ...NGHENGHIEP[data["job_title"]],
    },
    //Line 2
    {
      text: "X",
      x: CHUCVU[data["job_position"]],
      y: 622,
    },

    //Line 3
    {
      text: data["company_name"],
      x: 270,
      y: 613 + 22,
    },

    //Line 4
    {
      text: data["company_address"],
      x: 190,
      y: 628 + 22,
    },
    {
      text:
        data["work_ward"] +
        " " +
        data["work_district"] +
        " " +
        data["work_city"],
      x: 80,
      y: 640 + 22,
    },

    //Line 5
    {
      text: data["landline_company"],
      x: 180,
      y: 655 + 22,
    },

    //Line 6
    {
      text: data["tax_code"],
      x: 280,
      y: 670 + 22,
    },

    //Line 7
    {
      text: data["years_working"],
      x: 210,
      y: 685 + 22,
    },
    {
      text: data["months_working"],
      x: 250,
      y: 685 + 22,
    },
    // Line 8
    {
      text: data["main_income"],
      x: 490,
      y: 685 + 22,
    },
    // Line 9
    { text: "X", ...labour_contract[data["labour_contract"]] },
    // Line 10

    { text: "X", x: salary_payment_channel[data["get_salary_from"]], y: 750 },
  ];
}
