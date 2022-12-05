FROM node:16-alpine

# Create app directory
WORKDIR /code

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /code/

EXPOSE 32142
CMD [ "npm", "run", "production" ]