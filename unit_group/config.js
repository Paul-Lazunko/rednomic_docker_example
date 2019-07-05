import process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  unitId: process.env.unitId,
  db: {
    redis: {
      host: 'redis',
      port: 6379
    }
  }
}
