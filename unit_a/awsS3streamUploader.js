import config from './config';
import UploadStream from 's3-stream-upload'
import { S3 } from 'aws-sdk'

const s3 = new S3({
  accessKeyId: config.service.awsS3.accessKeyId,
  secretAccessKey: config.service.awsS3.secretAccessKey,
  Bucket: config.service.awsS3.Bucket
});

const streamUploader = async (file) => {
  return new Promise( ( resolve, reject) => {
    file.stream.pipe(UploadStream(s3, {
      Bucket: config.service.awsS3.Bucket,
        Key: file.filename,
        ACL: 'public-read'
    }))
      .on("error", function (error) {
        console.log('file error', error)
        return reject(error);
      })
      .on("finish", function (data) {
        return resolve(data);
      });
  });
};

export { streamUploader };

