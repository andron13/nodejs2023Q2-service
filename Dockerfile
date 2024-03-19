FROM node:alpine3.18

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]
