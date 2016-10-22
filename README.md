# koa2 boilerplate (native async/await flavor)

> Yet another koa2 boilerplate with native async/await using node 7 (nightly build at the moment)

:warning: async/await is still experimental, available under `harmony-async-await` flag.

## Prerequisites

Async/await is available under the harmony flag with **node 7**.  
This allows us to run koa2 without babel.

### Install node 7 using nvm
```
NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/test
nvm install 7
```

### Manual installation using binary
[Download](https://nodejs.org/download/test/) latest binary of node 7.

Node 7 should be released [on the 25th of October](https://github.com/nodejs/node/issues/7904).

## Getting Started

```bash
git clone git@github.com:NicolasRitouet/koa2-boilerplate-native.git my_project_name
cd my_project_name
rm -rf .git
```

## Usage
### Starting the server

`npm start`   
or manually   
`node --harmony-async-await index.js`

### Starting the server for development

`npm run watch`


## Koa2 boilerplate alternatives (Acknowledgments)
- [koa2-boilerplate](https://github.com/geekplux/koa2-boilerplate): a minimal boilerplate for koa2 and babel
- [koa2-api-boilerplate](https://github.com/adrianObel/koa2-api-boilerplate): full boilerplate with koa2 and mongodb
- [koa2-skeleton](https://github.com/saadq/koa2-skeleton)


## TODO
- add tests & CI

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details