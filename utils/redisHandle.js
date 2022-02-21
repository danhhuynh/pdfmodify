import { createClient } from "redis";
import { redisConfig } from "../config/redis.js";

export async function getValKeyRedis(key) {
  const client = createClient(redisConfig);

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  console.log(key);
  const value = await client.get(key);
  client.quit();
  if (value === null) {
    return "Not found in redis";
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
