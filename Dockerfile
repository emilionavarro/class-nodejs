#build container -- assumes that latest version of source is in host's directory
FROM node:carbon as builder

WORKDIR /app

#install dependencies
#copy both package.json and package-lock.json as well as tsconfig.json
COPY *.json ./

RUN npm install -g typescript && npm install 

#move our source to container
COPY ./src/ ./src/

RUN npm run build

#executing container
FROM node:8.12-alpine

# RUN apk --no-cache add ca-certificates

WORKDIR /app
COPY --from=builder /app/dist/ ./dist
COPY --from=builder /app/package*.json ./

RUN npm install --only=production 

CMD npm start
