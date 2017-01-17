const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank.js');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
});

router.get('/stylesheets/style.css', (req, res) => {
  var stylePath = path.join(__dirname, '../public/stylesheets/style.css');
  res.sendFile(stylePath);
});

module.exports = router;
