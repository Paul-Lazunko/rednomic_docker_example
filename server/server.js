import express from 'express';
import { RednomicServer } from 'rednomic';
import { RednomicUpload } from 'rednomic-upload';
import config from './config';

const app = express();

const RS = new RednomicServer({
  redisServer: config.db.redis,
  units: config.units,
  requestTimeout: config.requestTimeout,
  pingTimeout: config.pingTimeout
});

app.post('/file/',
  RednomicUpload,
  (req, res, next) => {
    RS.use('unit_group', {}, req, next);
  },
  async (req, res) => {
    if ( req.rednomic.errorResult) {
      res.status(400).send(JSON.stringify(req.rednomic.errorResult));
    } else {
      res.status(200).send(JSON.stringify(req.rednomic.successResult));
    }
  });

app.get('/echo', (req, res, next) => {
  RS.use('unit_c', {}, req, next);
}, async (req, res) => {
  res.status(200).send(JSON.stringify(req.rednomic.successResult));
});

app.get('/download', (req, res, next) => {
  RS.use('unit_d', {}, req, next);
}, async (req, res) => {
  if ( req.rednomic && req.rednomic._files ) {
    res.setHeader('Content-type', req.rednomic._files[0].mimeType);
    res.status(200);
    req.rednomic._files[0].stream.pipe(res);
  } else {
    res.status(200).send(JSON.stringify(req.rednomic.successResult));
  }

});

app.listen(config.server.port, () => {
  console.log( `API server was started at ${config.server.port} port` );
});
