import mongoose from "mongoose";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();
import {
  city,
  district,
  ward,
  bank_name,
  getCityDistrictWard,
  scheme_name,
} from "./utils/redis_cache.js";
import cityModel from "./models/city.js";
import districtModel from "./models/district.js";
import wardModel from "./models/ward.js";
import bankModel from "./models/bank.js";
import schemeModel from "./models/scheme.js";
import { getValKeyRedis, setKeyValRedis } from "./utils/redisHandle.js";

mongoose.connect(process.env.MONGODB_URI);

let pushCityToRedis = () => {
  cityModel.find(function (err, city) {
    if (err) {
      console.log(err);
      return;
    }
    city.forEach((val) => {
      let key = process.env.CITY_PREFIX + val["stateid"];
      setKeyValRedis(key, val["statedesc"]).then((res) => console.log(res));
    });
  });
};

let pushDistrictToRedis = () => {
  districtModel.find(function (err, district) {
    if (err) {
      console.log(err);
      return;
    }
    district.forEach((val) => {
      let key =
        process.env.CITY_PREFIX +
        val["city_id"] +
        process.env.DISTRICT_PREFIX +
        val["district_id"];
      setKeyValRedis(key, val["name"]).then((res) => console.log(res));
    });
  });
};

let pushWardToRedis = () => {
  wardModel
    .find(function (err, ward) {
      if (err) {
        console.log(err);
        return;
      }
      ward.forEach((val) => {
        let key = process.env.WARD_PREFIX + val["zipcode"];
        setKeyValRedis(key, val["zipdesc"]).then((res) => console.log(res));
      });
    })
    .skip(0)
    .limit(1000)
    .sort({
      _id: "asc",
    });
};

let pushBankToRedis = () => {
  bankModel.find(function (err, bank) {
    if (err) {
      console.log(err);
      return;
    }
    bank.forEach((val) => {
      let key = process.env.BANK_PREFIX + val["bankdesc"];
      setKeyValRedis(key, val["bankid"]).then((res) => console.log(res));
    });
  });
};

let pushSchemeToRedis = () => {
  schemeModel.find(function (err, scheme) {
    if (err) {
      console.log(err);
      return;
    }
    scheme.forEach((val) => {
      let key = process.env.SCHEME_PREFIX + val["schemename"];
      setKeyValRedis(key, val["schemeid"]).then((res) => console.log(res));
    });
  });
};

pushCityToRedis();
pushDistrictToRedis();
pushWardToRedis();
pushBankToRedis();
pushSchemeToRedis();
scheme_name("WHC CIVIL 433 GOOD - MT - AT").then((res) => console.log(res));
city(1).then((val) => console.log(val));
district(1, 482).then((res) => console.log(res));
ward(1014715).then((res) => console.log(res));
bank_name("Ngan hang TMCP NN&PTNT Viet Nam - CN Cho Con").then((res) =>
  console.log(res)
);
getCityDistrictWard(1, 482, 1014715).then((val) => console.log(val));
