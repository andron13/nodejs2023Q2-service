# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Setting Up Environment Variables

1. ❗ Create a new file named `.env` at the root directory of the project.
2. 📌 Refer to the `.env.example` file provided in the root directory for the schema of key-value pairs needed inside `.env`.

Remember to replace all keys with values specific to your environment or system. Never commit the `.env` with values to source control for security reasons.

## Running application

```bash
docker-compose up 
#or 
npm run docker:compose
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```


npx prisma migrate dev --name init
