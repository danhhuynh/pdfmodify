import { relationship_with_loaner } from "../coordinate/Section4.js";

export function genArrPoint_1(data) {
  return [
    // Line 1
    relationship_with_loaner[data["relationship_with_borrower"]]
      ? {
          text: "X",
          x: relationship_with_loaner[data["relationship_with_borrower"]],
          y: 776,
        }
      : {
          text: data["relationship_with_borrower"],
          x: 448,
          y: 776,
        },
    relationship_with_loaner[data["relationship_with_borrower"]]
      ? ""
      : {
          text: "X",
          x: 362,
          y: 776,
        },
  ];
}

export function genArrPoint_2(data) {
  return [
    //line 2
    {
      text: data["spouse_name"],
      x: 185,
      y: 58,
    },
    {
      text: data["spouse_dob"],
      x: 450,
      y: 58,
    },
    //Line 4
    {
      text: data["spouse_cmnd"],
      x: 466,
      y: 73,
    },
    //line 5
    {
      text: data["spouse_phone"],
      x: 176,
      y: 88,
    },
    //line 6
    data["spouse_address"] === "Giống với địa chỉ người cấp tín dụng"
      ? {
          text: "X",
          x: 150,
          y: 105,
        }
      : {
          text: "X",
          x: 338,
          y: 105,
        },
    data["spouse_address"] !== "Giống với địa chỉ người cấp tín dụng"
      ? {
          text: data["spouse_address"],
          x: 70,
          y: 115,
        }
      : "",
  ];
}
