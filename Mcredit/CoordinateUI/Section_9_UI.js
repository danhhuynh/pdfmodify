export default function genArrPoint(data) {
  return [
    //NHÂN VIÊN BÁN HÀNG
    // Line 1

    {
      text: data["salename"],
      x: 125,
      y: 548,
    },
    {
      text: data["salecode"],
      x: 140,
      y: 564,
    },
    {
      text: data["salephone"],
      x: 390,
      y: 565,
    },
    //Note
    {
      text: data["detail_note"],
      x: 40,
      y: 680,
    },
    {
      //   text: "2",
      //   x: 40,
      //   y: 693,
      // },
      // {
      //   text: "3",
      //   x: 40,
      //   y: 705,
    },
  ];
}
