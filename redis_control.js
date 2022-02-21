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
} from "./utils/redis_cache.js";
import cityModel from "./models/city.js";
import districtModel from "./models/district.js";
import wardModel from "./models/ward.js";
import bankModel from "./models/bank.js";
import { getValKeyRedis, setKeyValRedis } from "./utils/redisHandle.js";

mongoose.connect(process.env.MONGODB_URI);

let pushCityToRedis = () => {
  cityModel.find(function (err, city) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    city.forEach((val) => {
      let key = process.env.CITY_PREFIX + val["stateid"];
      setKeyValRedis(key, val["statedesc"]).then((res) => console.log(res));
    });
  });
};
// city(1).then((val) => console.log(val));
// pushCityToRedis();

let pushDistrictToRedis = () => {
  districtModel.find(function (err, district) {
    if (err) {
      res.status(500).send(err);
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
// pushDistrictToRedis();
// district(1, 482).then((res) => console.log(res));

let pushWardToRedis = () => {
  wardModel.find(function (err, ward) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    ward.forEach((val) => {
      let key = process.env.WARD_PREFIX + val["zipcode"];
      setKeyValRedis(key, val["zipdesc"]).then((res) => console.log(res));
    });
  });
};
// ward(1014715).then((res) => console.log(res));
// pushWardToRedis();
let pushBankToRedis = () => {
  bankModel.find(function (err, bank) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    bank.forEach((val) => {
      let key = process.env.BANK_PREFIX + val["bankid"];
      setKeyValRedis(key, val["bankdesc"]).then((res) => console.log(res));
    });
  });
};
// pushBankToRedis();
// bank_name(49204001).then((res) => console.log(res));

getCityDistrictWard(1, 482, 1014715).then((val) => console.log(val));
