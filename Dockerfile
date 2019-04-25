#build container -- assumes that latest version of source is in host's directory
FROM node:carbon

WORKDIR /app

#install dependencies
#copy both package.json and package-lock.json as well as tsconfig.json
COPY *.json ./

RUN npm install -g typescript && npm install 

#move our source to container
COPY ./src/ ./src/

RUN npm run build

CMD npm start
