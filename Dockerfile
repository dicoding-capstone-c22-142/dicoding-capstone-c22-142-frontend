FROM node:16-alpine

# Create app directory
WORKDIR /code

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN apk add autoconf2.13

RUN npm install

# Bundle app source
COPY . /code/

EXPOSE 32142
CMD [ "npm", "run", "production" ]
