FROM node:10

# Create app directory
WORKDIR /usr/src/app

ARG unitId=$unitId
ARG requestTimeout=$requestTimeout
ARG logsExpire=$logsExpire
ARG redisHost=$redisHost
ARG redisPort=$redisPort

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./simple_unit/package.json ./
COPY ./.env ./
RUN echo "unitId=${unitId}\n requestTimeout=${requestTimeout}\n logsExpire=${logsExpire}\n redisHost=${redisHost}\n redisPort=${redisPort}" >> .env

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./simple_unit .

CMD [ "node", "-r", "esm", "service.js" ]
