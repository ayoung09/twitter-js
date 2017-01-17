const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank.js');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets, showForm: true });
});

router.get('/stylesheets/style.css', (req, res) => {
  var stylePath = path.join(__dirname, '../public/stylesheets/style.css');
  res.sendFile(stylePath);
});

router.get( '/users/:name', (req, res) => {
  let user = req.params.name;
  let tweets = tweetBank.find({'name':user});
  res.render('index', { tweets: tweets, name: user, showForm: true });
});

router.get( '/tweets/:id', (req, res) => {
  let tweetID = +req.params.id;
  let tweets = tweetBank.find({'id':tweetID});
  res.render('index', { tweets: tweets });
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/tweets', function(req, res) {
  res.redirect('/');
});

module.exports = router;
