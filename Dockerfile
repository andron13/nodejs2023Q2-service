LABEL version="1.0" maintainer="andron13@gmail.com" description="RsSchool NodeJs Home Library Task" license="MIT" build-date="2024-03-12"

# FROM node:20.11-bullseye
# FROM node:lts-bullseye
# FROM node:lts-alpine3.18

FROM node:20.11-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV production
# ENV NPM_TOKEN 1234

WORKDIR /usr/src/app

#COPY . /usr/src/app
COPY --chown=node:node . .

# RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
   # npm ci --only=production

RUN npm ci --only=production

USER node

CMD ["dumb-init", "node", "start"]