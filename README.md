# Blueprint for developing Fastify Modern API

## Features

### Core

- Testing support with Jest and supertest
- Support for `.env` files
- Added Standard linting rules and autofixer

### Infrastructure

- Health endpoint `GET /__/health`
- Manifest endpoint `GET /__/manifest`

### Developer experience

- Live reloading with Nodemon
- Added Git hooks with Husky
- Added support for all Operative Systems (Win, Mac, Linux)
- Npm scripts to manage:
  - Linting
  - Testing (coverage, live, ci...)
- Extended Gitignore

## About the project

### Dependencies

- `cross-env@^7.0.3`
- `debug@^4.3.1`
- `dotenv@^8.2.0`
- `fastify@^3.9.2`

### DevDependencies

- `husky@^4.3.6`
- `jest@^26.6.3`
- `nodemon@^2.0.6`
- `standard@^16.0.3`
- `supertest@^6.0.1`

### Git Hooks

- pre-commit: `npm run lint`
- pre-push: `npm run test`

### Npm Scripts

- `npm run start`
- `npm run dev`
- `npm run test`
- `npm run test:coverage`
- `npm run test:watch`
- `npm run lint`
- `npm run lint:fix`

## How to use the project

Clone the project and customize it :smile:

```bash
git clone https://github.com/UlisesGascon/blueprint-fastify-modern-api
cd blueprint-fastify-modern-api
code .
```
