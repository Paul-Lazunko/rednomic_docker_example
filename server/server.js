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
  units: [
    {
      unitId: 'unit_group',
      description: 'upload file service'
    }
  ],
  requestTimeout: 15000,
  pingTimeout: 15000
});

app.post('/file/', RednomicUpload, (req, res, next) => {
  RS.use('unit_group', {}, req, next);
}, async (req, res, next) => {
  res.status(200).send(JSON.stringify(req.rednomic));
});

app.listen(config.server.port, () => {
  console.log( `API server was started at ${config.server.port} port` );
});
