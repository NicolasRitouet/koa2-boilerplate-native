// External dependencies
const Koa = require('koa');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');

// Internal modules
const db = require('./db');
const routes = require('./routes');
const config = require('./config')();

// Setup the app
const app = new Koa();

// Add middleware
app.use(logger())
  .use(bodyparser());

// Add routes
app.use(routes.base.routes())
  .use(routes.base.allowedMethods())
  .use(routes.users.routes())
  .use(routes.users.allowedMethods());

// Start server
app.listen(config.port, () => console.log(`Server started ${ config.port }`));

// Export server to allow testing
module.exports = app;