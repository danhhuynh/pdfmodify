import { getCityDistrictWard } from "../../utils/redis_cache.js";

export async function parsingAddress(data) {
  let redisData = await getCityDistrictWard(
    data["current_city"],
    data["current_district"],
    data["current_ward"]
  );

  data["current_city"] = redisData[0];
  data["current_district"] = redisData[1];
  data["current_ward"] = redisData[2];

  redisData = await getCityDistrictWard(
    data["work_city"],
    data["work_district"],
    data["work_ward"]
  );

  data["work_city"] = redisData[0];
  data["work_district"] = redisData[1];
  data["work_ward"] = redisData[2];

  redisData = await getCityDistrictWard(
    data["residence_city"],
    data["residence_district"],
    data["residence_ward"]
  );
  data["residence_city"] = redisData[0];
  data["residence_district"] = redisData[1];
  data["residence_ward"] = redisData[2];
}
