import * as dotenv from 'dotenv';
dotenv.config();

export default {
  unitId: 'unit_a',
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
      host: 'redis',
      port: 6379
    }
  }
}
