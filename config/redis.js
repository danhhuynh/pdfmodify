import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();
export const redisConfig = {
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  password: process.env.REDIS_PASSWORD,
};
