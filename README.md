# koa2 boilerplate (native async/await flavor)

> Yet another koa2 boilerplate with native async/await using node 7

:warning: async/await is still experimental, available under `harmony-async-await` flag.

## Prerequisites

Async/await is only available under the harmony flag with **node 7**.  
This allows us to run koa2 without babel.

### Install node 7 using nvm
```
nvm install 7
```

### Manual installation using binary
[Download](https://nodejs.org/en/) latest binary of node 7.

<del>Node 7 should be released [on the 25th of October](https://github.com/nodejs/node/issues/7904).</del>
Node 7 has been released :tada:

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
|`build`|Compiles the application to disk (`/dist` by default).|
|`watch`|Same as `yarn start`, but enables nodemon for the server as well.|


## Koa2 boilerplate alternatives (Acknowledgments)
- [koa2-boilerplate](https://github.com/geekplux/koa2-boilerplate): a minimal boilerplate for koa2 and babel
- [koa2-api-boilerplate](https://github.com/adrianObel/koa2-api-boilerplate): full boilerplate with koa2 and mongodb
- [koa2-skeleton](https://github.com/saadq/koa2-skeleton)


## TODO
- add tests & CI

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details