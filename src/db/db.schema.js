const db = require('./');

db.schema.createTableIfNotExists('users', (table) => {
  table.increments();
  table.string('email');
  table.string('username');
  table.string('password');
  table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
  table.timestamp('updated_at');
})  
.then((result) => {
  console.log('success', result);
  process.exit(0);
})
.catch((err) => {
  console.log('error', err);
  process.exit(1); 
});