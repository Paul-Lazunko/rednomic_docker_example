import process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  unitId: process.env.unitId,
  requestTimeout: parseInt(process.env.requestTimeout, 10),
  logsExpire: parseInt(process.env.logsExpire, 10),
  service: {
    awsS3: {
      accessKeyId: process.env.awsS3AccessKeyId,
      secretAccessKey: process.env.awsS3SecretAccessKeyId,
      Bucket: process.env.awsS3Bucket,
      baseURL: process.env.awsS3baseURL
    }
  },
  db: {
    redis: {
      host: process.env.redisHost,
      port: process.env.redisPort
    }
  }
}
