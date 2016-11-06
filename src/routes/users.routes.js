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

router.get('/users/:id', async (ctx) => {
  const userId = ctx.params.id;
  const user = await db('users').select().where('id', userId);
  if (!user || user.length < 1) {
    ctx.status = 404;
    return ctx.body = `user with id ${ userId } not found`;
  }
  ctx.body = user;
});

module.exports = router;