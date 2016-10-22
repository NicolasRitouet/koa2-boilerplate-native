const router = require('koa-router')();

router.get('/2', (ctx) => {
  ctx.body = 'Hello World 2';
});

module.exports = router;