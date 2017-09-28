const config = require('../config')();
console.log(config);
module.exports = require('knex')(config.db);
