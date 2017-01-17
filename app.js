const express = require('express');
const app = express();
const volley = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');

const port = 3000;

app.engine('html', nunjucks.render);

app.set('view engine', 'html');

var locals =
  {title: 'twitter jr',
  people:
    [{name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}]
  };

nunjucks.configure('views', {noCache: true});


app.listen(port, (req, res) => {
  console.log('server listening');
});

app.use(volley);

app.use('/', routes);

// app.use('/special/', (req, res, next) => {
//   console.log('You have reached the special area!');
//   next();
// })

// app.get('/', (req, res) => {
//   res.send('Welcome to Twitter!' + '\n');
// });

// // app.get('/views', (req, res) => {
// //   env.render('/views.index.html');
// //   res.send('index.html');
// // })

// app.get('/news', (req, res) => {
//   res.send('Breaking news: ' + '\n');
// });

// app.get('/views', (req, res) => {
//   res.render('index.html', locals);
// });
