import { createClient } from "redis";
import { redisConfig } from "../config/redis.js";
import cityModel from "../models/city.js";
import districtModel from "../models/district.js";
import wardModel from "../models/ward.js";
import bankModel from "../models/bank.js";
import schemeModel from "../models/scheme.js";
import tsaMafc from "../models/tsaMafc.js";

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
    if (key.includes(process.env.TSACODE_PREFIX)) {
      let keyTsa = key.split("::")[1];
      let tsaCode = await tsaMafc.find({
        inspectorid: keyTsa,
      });
      if (tsaCode.length !== 0) {
        let data = tsaCode[0]["inspectorname"];
        setKeyValRedis(keyTsa, data);
        return data;
      } else {
        return "Not Found";
      }
    }
  }
  return value;
}

export async function setKeyValRedis(key, value) {
  const client = createClient(redisConfig);

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  console.log(key, value);
  let result = await client.set(key, value, function (err, reply) {
    return reply;
  });

  return result;
}
