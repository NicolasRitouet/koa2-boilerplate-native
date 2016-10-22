const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const routes = require('./routes');
const config = require('./config')();
const app = new Koa();


// Add middleware
app.use(logger())
  .use(bodyparser());

// Add routes
app.use(routes.baseRoutes.routes())
  .use(routes.baseRoutes.allowedMethods())
  .use(routes.secondRoutes.routes())
  .use(routes.secondRoutes.allowedMethods());

app.listen(config.port, () => console.log(`Server started ${ config.port }`));
module.exports = app;