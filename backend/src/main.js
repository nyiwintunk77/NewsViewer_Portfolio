import Koa from 'koa';
import Router from 'koa-router';
import mongoose from 'mongoose';
import api from './api';
import bodyParser from 'koa-bodyparser';

require('dotenv').config();

const { PORT, MONGO_URL } = process.env;

mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.log(e);
    });

// const api = require('./api');

const app = new Koa();
const router = new Router();

// router.get('/', (ctx) => {
//     ctx.body = 'ホーム';
// });
// router.get('/about/:name?', (ctx) => {
//     const { name } = ctx.params;
//     ctx.body = name ? `${name}の紹介` : '紹介';
// });

// router.get('/posts', (ctx) => {
//     const { id } = ctx.query;
//     ctx.body = id ? `ホスト#${id}` : 'ホストがありません。';
// });

router.use('/api', api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log('Server Start!!at%d', port);
});
