export default function genArrPoint(data) {
  return [
    //THÔNG TIN THAM CHIẾU
    //Line 1
    {
      text: data["ref_1_name"],
      x: 230,
      y: 32 + 295,
    },
    {
      text: data["ref_1_type"],
      x: 285,
      y: 32 + 310,
    },
    {
      text: data["ref_1_phone"],
      x: 420,
      y: 32 + 310,
    },
    // Line 2
    {
      text: data["ref_2_name"],
      x: 230,
      y: 32 + 325,
    },
    {
      text: data["ref_2_type"],
      x: 285,
      y: 32 + 340,
    },
    {
      text: data["ref_2_phone"],
      x: 420,
      y: 32 + 340,
    },
  ];
}
