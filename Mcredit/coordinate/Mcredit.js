import { getLeadRender } from "../helpers/mongooseConnect.js";
import * as Sentry from "@sentry/node";

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

const dataFieldOnPDF = async () => {
  let leadData = [];
  try {
    leadData = await getLeadRender();
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
  }

  if (leadData.length === 0) {
    console.log("No Data");
    process.exit();
  }
  leadData = leadData[0];
  const customer = leadData.customer;
  const data = { ...leadData[0], ...customer };

  const PAGE_1 = [
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
      text: "1",
      x: 40,
      y: 680,
    },
    {
      text: "2",
      x: 40,
      y: 693,
    },
    {
      text: "3",
      x: 40,
      y: 705,
    },
  ];

  return [PAGE_1, PAGE_2];
};

export default dataFieldOnPDF;
