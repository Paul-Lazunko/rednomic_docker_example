Simple example of  microservices system based on Rednomic and Docker for uploading files to AWS S3


Define variables in .env file (look at .env.example):

```
awsS3AccessKeyId=***
awsS3SecretAccessKeyId=***
awsS3Bucket=***
awsS3baseURL=s3.eu-central-1.amazonaws.com

```

Run docker-compose up command:

```
docker-compose up -d;

```

Send file in FormData (POST http://localhost:3000/file) via Postman or in another way to test unit group which proxy upload units

Send request (GET http://localhost:3000/unit) to test simple unit

;)




