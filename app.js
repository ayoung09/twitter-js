const express = require('express');
const app = express();
const volley = require('volleyball');

const port = 3000;

app.listen(port, (req, res) => {
  console.log('server listening');
});

//app.use(volley);

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  next();
});

app.use('/special/', (req, res, next) => {
  console.log('You have reached the special area!');
  next();
})

app.get('/', (req, res) => {
  res.send('Welcome to Twitter!' + '\n');
});


app.get('/news', (req, res) => {
  res.send('Breaking news: ' + '\n');
})

