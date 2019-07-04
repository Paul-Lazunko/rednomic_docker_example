import * as dotenv from 'dotenv';
dotenv.config(__dirname + '/../.env');

export default {
  server: {
    port: 3000
  },
  db: {
    redis: {
      host: 'redis',
      port: 6379
    }
  }
}
