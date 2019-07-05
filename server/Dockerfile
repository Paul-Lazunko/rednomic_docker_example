FROM node:10

# Create app directory
WORKDIR /usr/src/app

ARG requestTimeout=$requestTimeout
ARG pingTimeout=$pingTimeout
ARG serverPort=$serverPort
ARG units=$units
ARG redisHost=$redisHost
ARG redisPort=$redisPort

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./server/package*.json ./
COPY ./.env ./

RUN echo "unitId=${unitId}\n units=${units}\n requestTimeout=${requestTimeout}\n serverPort=${serverPort}\n pingTimeout=${pingTimeout}\n redisHost=${redisHost}\n redisPort=${redisPort}" >> .env

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./server .

EXPOSE 3000

CMD [ "node", "-r", "esm", "server.js" ]
