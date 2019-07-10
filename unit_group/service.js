import { RednomicUnitGroup } from "rednomic";
import config from './config';

let service = new RednomicUnitGroup({
  redisServer: config.db.redis,
  unitId: config.unitId,
  units: config.units,
  pingTimeout: config.pingTimeout
});

