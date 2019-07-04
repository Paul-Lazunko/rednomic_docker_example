import * as dotenv from 'dotenv';
dotenv.config();

export default {
  unitId: 'unit_group',
  db: {
    redis: {
      host: 'redis',
      port: 6379
    }
  }
}
