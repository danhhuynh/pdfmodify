export default function genArrPoint(data) {
  return [
    //KÝ HỢP ĐỒNG VÀ GIẢI NGÂN
    //line 1
    data["disburment_form"] === "Nhận tiền mặt tại đại lý chi hộ"
      ? {
          text: "X",
          x: 203,
          y: 375,
        }
      : {
          text: "X",
          x: 203,
          y: 390,
        },
    data["disburment_form"] === "Chuyển khoản vào số tài khoản sau" && {
      text: data["disburment_form_bank_acc"],
      x: 400,
      y: 390,
    },
    data["disburment_form"] === "Chuyển khoản vào số tài khoản sau" && {
      text: data["disburment_form_bank"],
      x: 160,
      y: 403,
    },
    data["disburment_form"] === "Chuyển khoản vào số tài khoản sau" && {
      text: data["disburment_form_bank_branch"],
      x: 405,
      y: 403,
    },
  ];
}
