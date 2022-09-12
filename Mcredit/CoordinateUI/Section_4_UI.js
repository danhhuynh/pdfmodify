import { relationship_with_loaner } from "../coordinate/Section4.js";

export function genArrPoint_1(data) {
  return [];
}

export function genArrPoint_2(data) {
  return [
    // Line 1
    relationship_with_loaner[data["relationship_with_borrower"]]
      ? {
          text: "X",
          x: relationship_with_loaner[data["relationship_with_borrower"]],
          y: 35 + 46,
        }
      : {
          text: data["relationship_with_borrower"],
          x: 430,
          y: 35 + 45,
        },
    relationship_with_loaner[data["relationship_with_borrower"]]
      ? ""
      : {
          text: "X",
          x: 347,
          y: 35 + 46,
        },
    //line 2
    {
      text: data["spouse_name"],
      x: 185,
      y: 35 + 58,
    },
    {
      text: data["spouse_dob"],
      x: 450,
      y: 35 + 58,
    },
    //Line 4
    {
      text: data["spouse_cmnd"],
      x: 466,
      y: 35 + 73,
    },
    //line 5
    {
      text: data["spouse_phone"],
      x: 176,
      y: 35 + 88,
    },
    //line 6
    data["spouse_address"] === "Giống với địa chỉ người cấp tín dụng"
      ? {
          text: "X",
          x: 145,
          y: 36 + 105,
        }
      : {
          text: "X",
          x: 327,
          y: 36 + 105,
        },
    data["spouse_address"] !== "Giống với địa chỉ người cấp tín dụng"
      ? {
          text: data["spouse_address"],
          x: 70,
          y: 35 + 115,
        }
      : "",
  ];
}
