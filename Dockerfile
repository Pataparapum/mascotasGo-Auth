FROM node:20

WORKDIR /home/app

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm", "run", "start:dev" ]