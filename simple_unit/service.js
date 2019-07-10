import { RednomicUnit } from "rednomic";
import config from "./config";

let service = new RednomicUnit({
  redisServer: config.db.redis,
  unitId: config.unitId,
  requestTimeout: config.requestTimeout,
  logsExpire: config.logsExpire,
  service: async function (input) {
    let data, errors = [];
    try {
      data = await this.call('unit_e', {input});
      this.log('info', input);
    } catch (e) {
      this.log('error', e.message);
      errors.push(e.message);
    }
    return !! errors.length ? { status: false, errors  } : { status: true, data  };
  }
});
