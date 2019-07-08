import { RednomicUnit } from "rednomic";
import config from "./config";
import fs from 'fs'

let service = new RednomicUnit({
  redisServer: config.db.redis,
  unitId: config.unitId,
  requestTimeout: config.requestTimeout,
  logsExpire: config.logsExpire,
  service: async function (data) {
    let stream = fs.createReadStream(__dirname + '/test.jpg');
    this.returnStream({ mimeType: 'image/jpg'}, stream);
    return { status: true, data };
  }
});
