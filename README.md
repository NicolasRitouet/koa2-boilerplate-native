# koa2 boilerplate (native async/await flavor)

[![Build Status](https://travis-ci.org/NicolasRitouet/koa2-boilerplate-native.svg?branch=master)](https://travis-ci.org/NicolasRitouet/koa2-boilerplate-native)

> Yet another koa2 boilerplate with native async/await using node 8

## Features
- knex
- koa-routeur

## Prerequisites

### Install node 8 using nvm
```
nvm install 8
```

### Manual installation using binary
[Download](https://nodejs.org/en/) latest binary of node 8.


## Getting Started

```bash
git clone git@github.com:NicolasRitouet/koa2-boilerplate-native.git my_project_name
cd my_project_name
rm -rf .git
yarn                       # Install project dependencies (aka npm install)
yarn start                 # Launch (aka npm start)
```

## Usage

|`yarn/npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. Change port with `NODE_ENV=4000 npm start`|
|`test`|Run the test using mocha and supertest.|
|`watch`|Same as `yarn start`, but enables nodemon for the server as well.|
|`dev`|Watch the app with nodejs-dashboard in the terminal.|
|`db:migration`|Create the DB schema.|
|`deploy`|Deploy on [now.sh](https://now.sh).|


## Koa2 boilerplate alternatives (Acknowledgments)
- [koa2-boilerplate](https://github.com/geekplux/koa2-boilerplate): a minimal boilerplate for koa2 and babel
- [koa2-api-boilerplate](https://github.com/adrianObel/koa2-api-boilerplate): full boilerplate with koa2 and mongodb
- [koa2-skeleton](https://github.com/saadq/koa2-skeleton)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details