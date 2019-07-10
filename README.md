Simple example of  microservices system based on Rednomic and Docker for uploading files to AWS S3


Define variables in .env file (look at .env.example):

```.dotenv
awsS3AccessKeyId=***
awsS3SecretAccessKeyId=***
awsS3Bucket=***
awsS3baseURL=s3.eu-central-1.amazonaws.com
```

Run docker-compose up command:

```bash
docker-compose up -d;
```

Send file in FormData (POST http://localhost:3000/file) via Postman or in another way to test unit group which proxy upload units

Send request (GET http://localhost:3000/echo) to test simple unit

Send request (GET http://localhost:3000/download) to test backward binary streaming from microservice to entry point



For rebuilding test app run:

```bash
docker-compose down;
docker rmi entry_point unit_a unit_b unit_c unit_d unit_e unit_group;
docker-compose up -d;
```



