FROM node:10

# Create app directory
WORKDIR /usr/src/app

ARG unitId=$unitId
ARG units=$units

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./unit_group/package.json ./
COPY ./.env ./
RUN   echo "unitId=${unitId}" >> .env
RUN   echo "units=${units}" >> .env

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./unit_group .

CMD [ "node", "-r", "esm", "service.js" ]
