import process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

let units = process.env.units.split(' ') || [];

export default {
  unitId: process.env.unitId,
  units: units.map(unitId => { return { unitId } }),
  db: {
    redis: {
      host: 'redis',
      port: 6379
    }
  }
}
