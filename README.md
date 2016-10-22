# koa2 boilerplate (native async/await flavor)

> Yet another koa2 boilerplate with native async/await using node 7 (nightly build at the moment)

## Requirements

:warning: async/await is stil experimental available under `harmony-async-await` flag.

Node 7 should be released [on the 25th of October](https://github.com/nodejs/node/issues/7904).

### Node 7
#### Install using nvm
```
NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/test
nvm install 7
```

#### Manual installation using binary
[Download](https://nodejs.org/download/test/) latest binary of node 7.

## Starting the server

`npm start`   
or manually   
`node --harmony-async-await index.js`

## Starting the server for development

`npm run watch`


## Koa2 boilerplate alternatives
- [koa2-boilerplate](https://github.com/geekplux/koa2-boilerplate): a minimal boilerplate for koa2 and babel
- [koa2-api-boilerplate](https://github.com/adrianObel/koa2-api-boilerplate): full boilerplate with koa2 and mongodb
- [koa2-skeleton](https://github.com/saadq/koa2-skeleton)


## TODO
- add tests