const Koa = require('koa');


const app = new Koa();

app.use(ctx => {
    // console.log(ctx);
    let accept = ctx.request.accepts;
    ctx.response.body = 'hello world,' + accept
})
app.listen(7070);