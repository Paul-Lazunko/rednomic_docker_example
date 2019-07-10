import { RednomicUnit } from "rednomic";
import { streamUploader } from "./app/awsS3streamUploader";
import config from "./config";

let service = new RednomicUnit({
  redisServer: config.db.redis,
  unitId: config.unitId,
  requestTimeout: config.requestTimeout,
  logsExpire: config.logsExpire,
  service: async function (data) {
    let files = [], errors = [];
    await Promise.all(this.files.map(async file => {
      let filename = new Date().getTime().toString() + '.' + file.filename.split('.')[file.filename.split('.').length -1];
      files.push(`https://${config.service.awsS3.Bucket}.${config.service.awsS3.baseURL}/${filename}`);
      try {
        await streamUploader({ stream: file.stream, filename });
      } catch (e) {
        this.log('error', e.message);
        errors.push(e.message);
      }
    }));
    return { status: !!errors.length, files, errors };
  }
});
