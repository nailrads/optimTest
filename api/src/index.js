const express = require('express');
const mongoose = require('mongoose');
const {connectDb} = require('./helpers/db');
const {host, port} = require('./configuration');
const article = require('./demoData/article');
const demo = require('./demoData/demo');
const axios = require('axios');

const app = express();

const postSchema = new mongoose.Schema({
   name: String
});

async function getPost(url) {
   try {
      const response = await axios.get(url);
      console.log('API', response.data);
      return response.data;
   } catch (error) {
      console.error(error);
   }
}


const Post = mongoose.model('Post', postSchema);

const silence = new Post({name: 'Silence'});

const startServer = () => app.listen(port, _ => console.log(`Started API service port:${port} & host: ${host}, msg: ${silence}`));

app.get('/api/v1/stars/news/22-07-2019/molchat-ob-etom-bylo-krayne-tyazhelo-natalya-rudova-otpravilas-k-bredu-pittu', async (req, res) => {
   console.log('req', req)
   const url = 'https://www.cosmo.ru/api/v1/articles/molchat-ob-etom-bylo-krayne-tyazhelo-natalya-rudova-otpravilas-k-bredu-pittu/'
   res.send(await getPost(url))
});
app.get('/api/v1/demo/demo/demo/demo', (req, res) => res.send(demo));

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
