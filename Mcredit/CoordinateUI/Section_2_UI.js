import { dinhKyDongPhiBH, mucDichVay } from "../coordinate/Section2.js";

export default function genArrPoint(data) {
  return [
    //THÔNG TIN ĐỀ NGHỊ CẤP TÍN DỤNG
    //Line 1
    {
      text: "X",
      x: mucDichVay[data["loan_purpose"]],
      y: 310,
    },

    // Line 2

    {
      text: data["loan_period"],
      x: 150,
      y: 335,
    },
    // Line 3
    {
      text: data["product"],
      x: 150,
      y: 350,
    },
    // Line 4
    data["insurance_signup"] === "Yes"
      ? {
          text: "X",
          x: 285,
          y: 368,
        }
      : {
          text: "X",
          x: 355,
          y: 368,
        },
    //Line 5
    {
      text: data["loan_amount"],
      x: 310,
      y: 380,
    },
    //Line 6
    {
      text: data["insurance_name"],
      x: 150,
      y: 421,
    },
    {
      text: data["insurance_fee_charge"],
      x: 470,
      y: 421,
    },
    {
      text: "X",
      x: dinhKyDongPhiBH[data["insurance_period_charge"]],
      y: 438,
    },

    dinhKyDongPhiBH[data["insurance_period_charge"]] == undefined
      ? {
          text: "X",
          x: 444,
          y: 438,
        }
      : "",
    dinhKyDongPhiBH[data["insurance_period_charge"]] == undefined
      ? {
          text: data["insurance_period_charge"],
          x: 520,
          y: 438,
        }
      : "",
    //Line 7
    {
      text: data["med_value_of_utility_bill"],
      x: 470,
      y: 468,
    },
    //Line 8
    {
      text: data["med_value_of_account"],
      x: 410,
      y: 483,
    },
    //Line 9
    {
      text: data["price_of_bike"],
      x: 450,
      y: 498,
    },
    //Line 10
    {
      text: data["contract_credit_no"],
      x: 120,
      y: 530,
    },
    {
      text: data["contract_credit_period_pass"],
      x: 184,
      y: 545,
    },
    {
      text: data["contract_credit_amount_period"],
      x: 500,
      y: 545,
    },
    {
      text: data["contract_credit_date_end"].split("/")[0],
      x: 405,
      y: 530,
    },
    {
      text: data["contract_credit_date_end"].split("/")[1],
      x: 425,
      y: 530,
    },
    {
      text: data["contract_credit_date_end"].split("/")[2],
      x: 450,
      y: 530,
    },
  ];
}
