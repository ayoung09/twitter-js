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

router.get( '/users/:name', (req, res) => {
  let user = req.params.name;
  let tweets = tweetBank.list().filter( obj => obj.name === user);

  res.render('index', { tweets: tweets });
});


module.exports = router;
