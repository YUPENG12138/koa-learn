const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const path = require('path');
const app = new Koa();
const router = require('./router');

app.use(
  nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true //开启转义
    }
  })
);
app.use(bodyParser());
router(app);
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
