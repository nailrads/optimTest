const express = require('express');
const mongoose = require('mongoose');
const {connectDb} = require('./helpers/db');
const {host, port} = require('./configuration');
const article = require('./demoData/article');
const demo = require('./demoData/demo');

const app = express();

const postSchema = new mongoose.Schema({
   name: String
});


const Post = mongoose.model('Post', postSchema);

const silence = new Post({name: 'Silence'});

const startServer = () => app.listen(port, _ => console.log(`Started API service port:${port} & host: ${host}, msg: ${silence}`));

app.get('/api/v1/stars/news/22-07-2019/molchat-ob-etom-bylo-krayne-tyazhelo-natalya-rudova-otpravilas-k-bredu-pittu', (req, res) => res.send(article));
app.get('/api/v1/demo/demo/demo/demo', (req, res) => res.send(demo));

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
