FROM node:11.15.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . ./

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
