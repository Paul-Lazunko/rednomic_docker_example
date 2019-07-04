FROM node:10

# Create app directory
WORKDIR /usr/src/app

ENV unitId $unitId

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./unit_b/package.json ./
COPY ./.env ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./unit_b .

CMD [ "node", "-r", "esm", "service.js" ]
