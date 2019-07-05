import express from 'express';
import { RednomicServer } from 'rednomic';
import { RednomicUpload } from 'rednomic-upload';
import config from './config';

const app = express();
const RS = new RednomicServer({
  redisServer: {
    host: 'redis',
    port: 6379
  },
  units: config.units,
  requestTimeout: config.requestTimeout,
  pingTimeout: config.pingTimeout
});

app.post('/file/', RednomicUpload, (req, res, next) => {
  RS.use('unit_group', {}, req, next);
}, async (req, res) => {
  res.status(200).send(JSON.stringify(req.rednomic));
});

app.get('/unit', (req, res, next) => {
  RS.use('unit_c', {}, req, next);
}, async (req, res) => {
  res.status(200).send(JSON.stringify(RS.getHealthStatuses()));
});

app.listen(config.server.port, () => {
  console.log( `API server was started at ${config.server.port} port` );
});
