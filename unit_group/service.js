import { RednomicUnitGroup } from "rednomic";
import config from './config';

let service = new RednomicUnitGroup({
  redisServer: config.db.redis,
  unitId: config.unitId,
  units: [
    { unitId: 'unit_a'},
    { unitId: 'unit_b'}
  ],
  pingTimeout: config.pingTimeout
});

