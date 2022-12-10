FROM node:16-alpine

# Create app directory
WORKDIR /code

RUN apk add autoconf libtool pkg-config nasm build-essential libpng16-dev
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . /code/

EXPOSE 32142
CMD [ "npm", "run", "production" ]
