## REST-сервис: Контейнеризация, Docker и База данных & ORM

## Предварительные требования

- Ссылка на [задание](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/containerization-database-orm/assignment.md) 

1. Установите [Docker](https://docs.docker.com/engine/install/)
2. Создайте аккаунт `Docker Hub` [Docker Hub](https://hub.docker.com/)

## Технические требования
- Используйте версию Node.js 20 LTS

## Описание

# 1) Контейнеризация, Docker

Ваша задача — создать и запустить многоконтейнерное приложение с использованием Docker.

# 2) База данных & ORM

Ваша задача — реализовать базу данных PostgreSQL в качестве источника данных для вашего приложения и TypeORM / Prisma для взаимодействия с вашей базой данных.


## Детали реализации

# 1) Контейнеризация, Docker

1. Создайте файл `.dockerignore` и перечислите все файлы, которые должны быть проигнорированы `Docker`.
2. Создайте `Dockerfile`, который будет использоваться для создания образа базы данных `PostgreSQL`.
3. Создайте `Dockerfile`, который будет использоваться для создания образа вашего приложения.
4. Создайте файл `docker-compose.yml`, который будет использоваться для запуска многоконтейнерного приложения (вашего приложения и базы данных `PostgreSQL`). Укажите созданную вами сеть, которая будет использоваться для коммуникации между приложением и контейнерами базы данных.
6. Создайте образы и просканируйте их на наличие уязвимостей в области безопасности.
7. Отправьте созданные образы в ваш личный или приватный репозиторий на `Docker Hub`.

# 2) База данных (PostgreSQL) & ORM

1. Используйте базу данных **PostgreSQL** для хранения данных **REST** сервиса (`Users`, `Albums`, `Tracks`, `Artists`, `Favorites`)
2. Используйте [TypeORM](https://typeorm.io/#/) или [Prisma](https://www.prisma.io/) с Nest.js для хранения и обновления данных
3. Информация о подключении к базе данных должна храниться в файле `.env`
4. База данных **PostgreSQL** должна работать внутри контейнера `docker`



## ENGLISH REST service: Containerization, Docker and Database & ORM


## Prerequisites

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Create `Docker Hub` account [Docker Hub](https://hub.docker.com/)

## Technical requirements
- Use 20 LTS version of Node.js

## Description

# 1) Containerization, Docker

Your task is to build and run multi-container application using Docker.

# 2) Database & ORM

Your task is to implement PostgreSQL database as source of data for your application and TypeORM / Prisma to communicate with your database.


## Implementation details

# 1) Containerization, Docker

1. Create `.dockerignore` file and list all files that should be ignored by `Docker`.
2. Create `Dockerfile` that will be used for building image of `PostgreSQL` database.
3. Create `Dockerfile` that will be used for building image of your application.
4. Create `docker-compose.yml` file that will be used for running multi-container application (your application and `PostgreSQL` database). Specify custom network that will be used for communication between application and database containers.
6. Build images and scan it for security vulnerabilities.
7. Push built images to your personal or private repository on `Docker Hub`.

# 2) Database (PostgreSQL) & ORM

1. Use **PostgreSQL** database to store **REST** service data (`Users`, `Albums`, `Tracks`, `Artists`, `Favorites`)
2. Use [TypeORM](https://typeorm.io/#/) or [Prisma](https://www.prisma.io/) with Nest.js to store and update data
3. The information on DB connection should be stored in `.env` file
4. **PostgreSQL** database should run inside of the `docker` container
