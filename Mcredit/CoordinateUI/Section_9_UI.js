export function genArrPoint(data) {
  return [
    //NHÂN VIÊN BÁN HÀNG
    // Line 1

    {
      text: data["salename"],
      x: 125,
      y: 68 + 548,
    },
    {
      text: data["salecode"],
      x: 140,
      y: 68 + 564,
    },
    {
      text: data["salephone"],
      x: 390,
      y: 68 + 565,
    },
    {
      //   text: "2",
      //   x: 40,
      //   y: 68+693,
      // },
      // {
      //   text: "3",
      //   x: 40,
      //   y: 68+705,
    },
  ];
}

export function genArrPoint2(data) {
  return [
    //Ghi chú
    //Line 1
    {
      text: data["line_of_credit"],
      x: 192,
      y: 90,
      fontSize: 8,
    },
    {
      text: data["line_of_credit_by_word"],
      x: 320,
      y: 90,
    },
    //Line 2
    data["credit_receive_method"] === "Địa chỉ thường trú"
      ? {
          text: "X",
          x: 66,
          y: 115,
        }
      : data["credit_receive_method"] === "Địa chỉ tạm trú"
      ? {
          text: "X",
          x: 66,
          y: 127,
        }
      : {
          text: "X",
          x: 66,
          y: 139,
        },
    //Line 3
    data["secure_question"] === "Họ tên mẹ"
      ? {
          text: "X",
          x: 48,
          y: 175,
        }
      : data["secure_question"] === "Tên trường tiểu học đầu tiên"
      ? {
          text: "X",
          x: 109,
          y: 175,
        }
      : {
          text: "X",
          x: 244,
          y: 175,
        },
    {
      text: data["answer"],
      x: 112,
      y: 187,
    },
    //Line 4
    data["internet_exchange_signup"] === "Yes"
      ? {
          text: "X",
          x: 186,
          y: 200,
        }
      : {
          text: "X",
          x: 220,
          y: 200,
        },
    //Line 5
    data["insurance_credit_card"] === "Yes"
      ? {
          text: "X",
          x: 149,
          y: 211,
        }
      : {
          text: "X",
          x: 183,
          y: 211,
        },
    //Line 6
    data["anual_fee"] === "Yes"
      ? {
          text: "X",
          x: 142,
          y: 223,
        }
      : {
          text: "X",
          x: 192,
          y: 223,
        },
    //Line 7
    data["card_release_fee"] === "Yes"
      ? {
          text: "X",
          x: 142,
          y: 235,
        }
      : {
          text: "X",
          x: 192,
          y: 235,
        },
    //Line 8
    data["phoi_the"] === "Normal"
      ? {
          text: "X",
          x: 97,
          y: 247,
        }
      : {
          text: "X",
          x: 164,
          y: 247,
        },
    data["phoi_the"] !== "Normal" && {
      text: data["phoi_the"],
      x: 214,
      y: 247,
    },
    //Note
    {
      text: data["detail_note"],
      x: 40,
      y: 308,
    },
  ];
}
