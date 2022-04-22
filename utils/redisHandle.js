import { createClient } from "redis";
import { redisConfig } from "../config/redis.js";
import cityModel from "../models/city.js";
import districtModel from "../models/district.js";
import wardModel from "../models/ward.js";
import bankModel from "../models/bank.js";
import schemeModel from "../models/scheme.js";

export async function getValKeyRedis(key) {
  const client = createClient(redisConfig);

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  console.log(key);
  const value = await client.get(key);
  client.quit();
  if (value === null) {
    if (key.includes(process.env.WARD_PREFIX)) {
      let val_of_key = key.split("::")[1];
      let ward_name = await wardModel.find({ zipcode: val_of_key });
      if (ward_name.length !== 0) {
        let data = ward_name[0]["zipdesc"];
        setKeyValRedis(key, data);
        return data;
      } else {
        return "Not Found";
      }
    }
    if (key.includes(process.env.CITY_PREFIX)) {
      let val_of_key = key.split("::")[1];
      let cityName = await districtModel.find({ stateid: val_of_key });
      if (cityName.length !== 0) {
        let data = cityName[0]["statedesc"];
        setKeyValRedis(key, data);
        return data;
      } else {
        return "Not Found";
      }
    }
    if (key.includes(process.env.DISTRICT_PREFIX)) {
      let key_city = key.split("::")[1];
      let key_district = key.split("::")[3];
      let districtName = await cityModel.find({
        city_id: key_city,
        district_id: key_district,
      });
      if (districtName.length !== 0) {
        let data = districtName[0]["name"];
        setKeyValRedis(key, data);
        return data;
      } else {
        return "Not Found";
      }
    }
    if (key.includes(process.env.BANK_PREFIX)) {
      let key_bank = key.split("::")[1];
      let bankId = await bankModel.find({
        bankdesc: key_bank,
      });
      if (bankId.length !== 0) {
        let data = bankId[0]["bankid"];
        setKeyValRedis(key, data);
        return data;
      } else {
        return "Not Found";
      }
    }
    if (key.includes(process.env.SCHEME_PREFIX)) {
      let key = key.split("::")[1];
      let schemeId = await schemeModel.find({
        schemename: key,
      });
      if (schemeId.length !== 0) {
        let data = schemeId[0]["schemeid"];
        setKeyValRedis(key, data);
        return data;
      } else {
        return "Not Found";
      }
    }
  }
  let key = process.env.CITY_PREFIX + cityId;
  return getValKeyRedis(key);
};
export const district = (cityId, districtId) => {
  if (!cityId || !districtId) {
    return new Promise((resolve) => "");
  }
  let key =
    process.env.CITY_PREFIX + cityId + process.env.DISTRICT_PREFIX + districtId;
  return getValKeyRedis(key);
};
export const ward = (wardId) => {
  if (!wardId) {
    return new Promise((resolve) => "");
  }
  let key = process.env.WARD_PREFIX + wardId;
  return getValKeyRedis(key);
};
export const bank_name = (bankid) => {
  let key = process.env.BANK_PREFIX + bankid;
  return getValKeyRedis(key);
};

export const scheme_name = (schemename) => {
  let key = process.env.SCHEME_PREFIX + schemename;
  return getValKeyRedis(key);
};

export const getCityDistrictWard = (cityId, districtId, wardId) => {
  let promiseCity = new Promise((resolve) => {
    city(cityId).then((val) => resolve(val));
  });
  let promiseDistrict = new Promise((resolve) => {
    district(cityId, districtId).then((val) => resolve(val));
  });
  let promiseWard = new Promise((resolve) => {
    ward(wardId).then((val) => resolve(val));
  });
  return Promise.all([promiseCity, promiseDistrict, promiseWard]);
};

export const tsaCode = async (tsacode) => {
  if (!tsacode) {
    return "";
  }
  let key = process.env.TSACODE_PREFIX + tsacode;
  return getValKeyRedis(key);
};
