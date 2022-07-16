import { listInfoCustomer } from "../helpers/mongooseConnect.js";

const CHUCVU = {
  CBQL: {
    text: "1",
    x: 120,
    y: 600,
  },
  TN: {
    text: "2",
    x: 220,
    y: 600,
  },
};

const NGHENGHIEP = {
  CN: {
    text: "1",
    x: 145,
    y: 575,
  },
  NV: {
    text: "2",
    x: 210,
    y: 575,
  },
  NT: {
    text: "3",
    x: 320,
    y: 575,
  },
  CCNN: {
    text: "4",
    x: 370,
    y: 575,
  },
  QN: {
    text: "5",
    x: 490,
    y: 575,
  },
  KDTD: {
    text: "1",
    x: 70,
    y: 585,
  },
  HT: {
    text: "2",
    x: 170,
    y: 585,
  },
  HKD: {
    text: "3",
    x: 220,
    y: 585,
  },
  HSSV: {
    text: "4",
    x: 340,
    y: 585,
  },
  PVGV: {
    text: "5",
    x: 450,
    y: 585,
  },
};

const mucDichVay = {
  "Sửa nhà": {
    text: "90",
    x: 145,
    y: 310,
  },
  "Khám/ Chữa bệnh": {
    text: "90",
    x: 210,
    y: 310,
  },
  "Đi du lịch": {
    text: "90",
    x: 320,
    y: 310,
  },
  "Mua sắm": {
    text: "90",
    x: 390,
    y: 310,
  },
  "Nộp học phí": {
    text: "90",
    x: 450,
    y: 310,
  },
  "Nhu cầu khác": {
    text: "90",
    x: 530,
    y: 310,
  },
};

const choO = {
  "Sở hữu": {
    text: "90",
    x: 160,
    y: 280,
  },
  Thuê: {
    text: "90",
    x: 220,
    y: 280,
  },
  "Ở nhờ": {
    text: "90",
    x: 270,
    y: 280,
  },
  "Sống với bố mẹ": {
    text: "90",
    x: 320,
    y: 280,
  },
  "Tại đơn vị đóng quân": {
    text: "90",
    x: 420,
    y: 280,
  },
};

const education_status = {
  "Phổ thông": {
    text: "0",
    x: 120,
    y: 155,
  },
  "Trung cấp": {
    text: "0",
    x: 210,
    y: 155,
  },
  "Cao đẳng": {
    text: "1",
    x: 280,
    y: 155,
  },

  "Đại học": {
    text: "2",
    x: 360,
    y: 155,
  },
  "Sau đại học": {
    text: "3",
    x: 430,
    y: 155,
  },
};

const dataFieldOnPDF = async () => {
  const dataasdasdasdas = await listInfoCustomer();
  const customer = dataasdasdasdas[0].customer;
  const data = { ...dataasdasdasdas[0], ...customer };

  const PAGE_1 = [
    {
      text: data["name"],
      x: 135,
      y: 110,
    },
    {
      text: data["date_of_birth"],
      x: 135,
      y: 125,
    },

    //Line 3
    data["gender"] === "Female"
      ? {
          text: "0",
          x: 390,
          y: 127,
        }
      : {
          text: "0",
          x: 445,
          y: 127,
        },

    //Line 4

    {
      text: "0",
      x: 190,
      y: 140,
    },
    {
      text: "0",
      x: 260,
      y: 140,
    },
    {
      text: "1",
      x: 370,
      y: 140,
    },

    {
      text: "2",
      x: 430,
      y: 140,
    },
    {
      text: "3",
      x: 490,
      y: 140,
    },

    // Line 5

    // education_status["THCS"],

    // Line 6
    {
      text: data["cccd"],
      x: 200,
      y: 170,
    },
    // Line 7
    {
      text: data["phone"],
      x: 140,
      y: 185,
    },
    //line 8
    {
      text: data["email"],
      x: 360,
      y: 185,
    },
    //line 9
    {
      text: "4567898765445678dfghhkjvbckhjlkhbvhkjasdashdjkhaskjdsadjlkasjd",
      x: 170,
      y: 203,
    },
    {
      text: "4567898765445678dfghhkjvbckhjlkhbvhkjasdashdjkhaskjdsadjlkasjd",
      x: 90,
      y: 218,
    },

    //line 10
    {
      text: "0",
      x: 165,
      y: 235,
    },
    {
      text: "0",
      x: 310,
      y: 235,
    },
    {
      text: "4567898765445678dfghhkjvbckhjlkhbvhkjasdashdjkhaskjdsadjlkasjd",
      x: 90,
      y: 250,
    },
    //Line 11
    {
      text: "90",
      x: 260,
      y: 265,
    },
    {
      text: "90",
      x: 300,
      y: 265,
    },

    //Line 12

    // choO["SH"],

    //THÔNG TIN ĐỀ NGHỊ CẤP TÍN DỤNG
    //Line 1
    // mucDichVay["SN"],

    // Line 2

    {
      text: "90",
      x: 150,
      y: 335,
    },
    // Line 3
    {
      text: "90dfghjkliop';oljkhgcfvhjb",
      x: 150,
      y: 350,
    },
    // Line 4
    {
      text: "9",
      x: 285,
      y: 368,
    },
    {
      text: "9",
      x: 355,
      y: 368,
    },
    //Line 5
    {
      text: "9yiuogoiu",
      x: 310,
      y: 380,
    },
    //Line 6
    {
      text: "90dfghjkliop';oljkhgcfvhjb",
      x: 150,
      y: 420,
    },
    {
      text: "90dfghjkliop';oljkhgcfvhjb",
      x: 470,
      y: 420,
    },
    {
      text: "9",
      x: 170,
      y: 440,
    },
    {
      text: "9",
      x: 250,
      y: 440,
    },
    {
      text: "9",
      x: 320,
      y: 440,
    },
    {
      text: "9",
      x: 380,
      y: 440,
    },
    {
      text: "9",
      x: 440,
      y: 440,
    },
    {
      text: "9",
      x: 520,
      y: 440,
    },
    //Line 7
    {
      text: "9",
      x: 470,
      y: 470,
    },
    //Line 8
    {
      text: "9",
      x: 410,
      y: 485,
    },
    //Line 9
    {
      text: "9",
      x: 450,
      y: 500,
    },
    //Line 10
    {
      text: "9cghvjbkl;jhgvjbknl",
      x: 120,
      y: 530,
    },
    {
      text: "9c",
      x: 180,
      y: 545,
    },
    {
      text: "9ưqwe",
      x: 500,
      y: 545,
    },
    {
      text: "3213",
      x: 450,
      y: 530,
    },
    {
      text: "9123",
      x: 440,
      y: 530,
    },

    //THÔNG TIN VIỆC LÀM VÀ THU NHẬP
    //Line 1
    // NGHENGHIEP["CN"],
    //Line 2
    // CHUCVU["TN"],

    //Line 3
    {
      text: "2ádhasdkjashdkjas",
      x: 270,
      y: 613,
    },

    //Line 4
    {
      text: "2ádhasdkjashdkjas",
      x: 190,
      y: 628,
    },
    {
      text: "2ádhasdkjashdkjacghjkl;'kjhgfjkl;l'kjhgfjklj;jkhjgfjgkhlj;ks",
      x: 80,
      y: 640,
    },
    //Line 5
    {
      text: "2ádhasdkjashdkjacghjkl;'kjhgfjkl;l'kjhgfjklj;jkhjgfjgkhlj;ks",
      x: 180,
      y: 655,
    },
    {
      text: "2ádhasdkjashdkjacghjkl;'kjhgfjkl;l'kjhgfjklj;jkhjgfjgkhlj;ks",
      x: 280,
      y: 670,
    },

    //Line 7

    {
      text: "2s",
      x: 225,
      y: 685,
    },

    {
      text: "2s",
      x: 260,
      y: 685,
    },
    // Line 8
    {
      text: "2ssádasdasds",
      x: 500,
      y: 685,
    },
    // Line 9
    {
      text: "2",
      x: 135,
      y: 700,
    },
    {
      text: "3",
      x: 275,
      y: 700,
    },
    {
      text: "5",
      x: 120,
      y: 713,
    },
    {
      text: "6",
      x: 260,
      y: 713,
    },
    // Line 10
    {
      text: "5",
      x: 180,
      y: 733,
    },
    {
      text: "6",
      x: 255,
      y: 733,
    },
    {
      text: "6",
      x: 375,
      y: 733,
    },
    // Line 11
    {
      text: "5",
      x: 70,
      y: 773,
    },
    {
      text: "5",
      x: 225,
      y: 773,
    },
    {
      text: "5",
      x: 360,
      y: 773,
    },
    {
      text: "5gchjkl;jhgcfxchvjklj;jlhkgcvjkl",
      x: 450,
      y: 773,
    },
  ];

  const PAGE_2 = [
    {
      text: "Trần Đức Anh",
      x: 185,
      y: 58,
    },
    {
      text: "Trần Đức Anh",
      x: 450,
      y: 58,
    },
    //Line 2
    {
      text: "Trần Đức Anh",
      x: 465,
      y: 75,
    },
    //line 3
    {
      text: "Trần Đức Anh",
      x: 170,
      y: 88,
    },
    //line 4
    {
      text: "1",
      x: 150,
      y: 105,
    },
    {
      text: "2",
      x: 340,
      y: 105,
    },
    {
      text: "1",
      x: 420,
      y: 105,
    },
    {
      text: "1ghguhiolikghchouphihgcipouhhgupoighhhoij",
      x: 70,
      y: 115,
    },
    //THÔNG TIN THAM CHIẾU
    //Line 1
    {
      text: "1ghguhiolikghchouphihgcipouhhgupoighhhoij",
      x: 230,
      y: 295,
    },
    {
      text: "1ghguhi",
      x: 285,
      y: 310,
    },
    {
      text: "1ghguhiolikgj",
      x: 420,
      y: 310,
    },
    // Line 2
    {
      text: "1ghguhiolikghchouphihgcipouhhgupoighhhoij",
      x: 230,
      y: 325,
    },
    {
      text: "1ghguhi",
      x: 285,
      y: 340,
    },
    {
      text: "1ghguhiolikgj",
      x: 420,
      y: 340,
    },
    //KÝ HỢP ĐỒNG VÀ GIẢI NGÂN
    //line 1
    {
      text: "1",
      x: 205,
      y: 375,
    },
    {
      text: "1",
      x: 205,
      y: 390,
    },
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 400,
      y: 390,
    },
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 160,
      y: 403,
    },
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 405,
      y: 403,
    },
    //NHÂN VIÊN BÁN HÀNG
    // Line 1

    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 125,
      y: 550,
    },
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 135,
      y: 565,
    },
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 385,
      y: 565,
    },
    //Note
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 40,
      y: 680,
    },
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 40,
      y: 690,
    },
    {
      text: "1ghguhiasdasdaodasdlikgj",
      x: 40,
      y: 705,
    },
  ];

  console.log([PAGE_1, PAGE_2]);

  return [PAGE_1, PAGE_2];
};

export default dataFieldOnPDF;
