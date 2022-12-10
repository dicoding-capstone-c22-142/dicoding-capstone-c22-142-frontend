FROM node:16-slim

# Create app directory
WORKDIR /code

# RUN apk --update upgrade
# RUN apk add autoconf automake make gcc g++ libtool

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . /code/

EXPOSE 32142
CMD [ "npm", "run", "production" ]
