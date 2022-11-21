FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN npm install
RUN npm build

EXPOSE 3001

CMD [ "npm", "start" ]
