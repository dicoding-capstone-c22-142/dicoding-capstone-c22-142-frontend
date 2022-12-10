FROM node:16-alpine

# Create app directory
WORKDIR /code

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g npm@9.2.0

RUN npm install

RUN npm npm audit fix --force

RUN npm run build

RUN npm run build-image

# Bundle app source
COPY . /code/

EXPOSE 32142
CMD [ "npm", "run", "serve" ]
