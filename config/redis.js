import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();
export const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
};
