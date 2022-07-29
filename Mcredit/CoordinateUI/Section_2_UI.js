import { dinhKyDongPhiBH, mucDichVay } from "../coordinate/Section2.js";
const y = 22;

export default function genArrPoint(data) {
  return [
    //THÔNG TIN ĐỀ NGHỊ CẤP TÍN DỤNG
    //Line 1
    {
      text: "X",
      x: mucDichVay[data["loan_purpose"]],
      y: y + 320,
    },

    // Line 2

    {
      text: data["loan_period"],
      x: 150,
      y: y + 335,
    },
    // Line 3
    {
      text: data["product"],
      x: 150,
      y: y + 350,
    },
    // Line 4
    data["insurance_signup"] === "Yes"
      ? {
          text: "X",
          x: 278,
          y: y + 367,
        }
      : {
          text: "X",
          x: 353,
          y: y + 367,
        },
    //Line 5
    {
      text: data["loan_amount"],
      x: 280,
      y: y + 382,
    },
    //Line 6
    {
      text: data["insurance_name"],
      x: 150,
      y: y + 414,
    },
    {
      text: data["insurance_fee_charge"],
      x: 470,
      y: y + 414,
    },
    {
      text: "X",
      x: dinhKyDongPhiBH[data["insurance_period_charge"]],
      y: y + 431,
    },

    dinhKyDongPhiBH[data["insurance_period_charge"]] == undefined
      ? {
          text: "X",
          x: 444 - 9,
          y: y + 431,
        }
      : "",
    dinhKyDongPhiBH[data["insurance_period_charge"]] == undefined
      ? {
          text: data["insurance_period_charge"],
          x: 520 - 10,
          y: y + 431,
        }
      : "",
    //Line 7
    {
      text: data["med_value_of_utility_bill"],
      x: 470 - 20,
      y: y - 9 + 468,
    },
    //Line 8
    {
      text: data["med_value_of_account"],
      x: 410 - 20,
      y: y - 9 + 483,
    },
    //Line 9
    {
      text: data["price_of_bike"],
      x: 450 - 20,
      y: y - 9 + 498,
    },
    //Line 10
    {
      text: data["contract_credit_no"],
      x: 120,
      y: y - 9 + 530,
    },
    {
      text: data["contract_credit_period_pass"],
      x: 184,
      y: y - 9 + 545,
    },
    {
      text: data["contract_credit_amount_period"],
      x: 500 - 20,
      y: y - 9 + 545,
    },
    {
      text: data["contract_credit_date_end"].split("/")[0],
      x: 405,
      y: y - 9 + 530,
    },
    {
      text: data["contract_credit_date_end"].split("/")[1],
      x: 425,
      y: y - 9 + 530,
    },
    {
      text: data["contract_credit_date_end"].split("/")[2],
      x: 450,
      y: y - 9 + 530,
    },
  ];
}
