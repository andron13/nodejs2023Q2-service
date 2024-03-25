ARG NODE_VERSION=20.9.0
ARG PORT=4000

FROM node:${NODE_VERSION}-alpine3.18

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "start:migrate:dev"]
