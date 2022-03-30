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
