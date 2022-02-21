import { getValKeyRedis } from "./redisHandle.js";
import { createRequire } from "module";
import { resolve } from "path";
const require = createRequire(import.meta.url);
require("dotenv").config();

export const hello = async () => "Hello";
export const city = async (cityId) => {
  let key = process.env.CITY_PREFIX + cityId;
  return getValKeyRedis(key);
};
export const district = (cityId, districtId) => {
  let key =
    process.env.CITY_PREFIX + cityId + process.env.DISTRICT_PREFIX + districtId;
  return getValKeyRedis(key);
};
export const ward = (wardId) => {
  let key = process.env.WARD_PREFIX + wardId;
  return getValKeyRedis(key);
};
export const bank_name = (bankid) => {
  let key = process.env.BANK_PREFIX + bankid;
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
