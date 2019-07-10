import { RednomicUnit } from "rednomic";
import config from "./config";

let service = new RednomicUnit({
  redisServer: config.db.redis,
  unitId: config.unitId,
  requestTimeout: config.requestTimeout,
  logsExpire: config.logsExpire,
  service: async function (input) {
    return { unitId: config.unitId };
  }
});
