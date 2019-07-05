import process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

let units = process.env.units.split(' ') || [];

export default {
  unitId: process.env.unitId,
  requestTimeout: parseInt(process.env.requestTimeout,10),
  pingTimeout: parseInt(process.env.pingTimeout, 10),
  units: units.map(unitId => { return { unitId } }),
  db: {
    redis: {
      host: process.env.redisHost,
      port: process.env.redisPort
    }
  }
}
