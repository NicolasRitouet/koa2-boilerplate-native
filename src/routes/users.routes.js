const router = require('koa-router')();
const db = require('../db');

router.get('/users', async (ctx) => {
  const users = await db('users').select();
  ctx.body = users;
});

router.post('/users', async (ctx) => {
  const newUser = Object.assign(ctx.request.body, { updated_at: db.fn.now() });
  const userid = await db('users').insert(newUser);
  ctx.body = userid;
});

router.get('/users/:username', async (ctx) => {
  const username = ctx.params.username;
  const user = await db('users').select().where('username', username);
  if (!user || user.length < 1) {
    ctx.status = 404;
    return ctx.body = `user with id ${ username } not found`;
  }
  ctx.body = user;
});

module.exports = router;