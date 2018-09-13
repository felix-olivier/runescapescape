const express = require('express');
const hbs = require('hbs');
const path = require('path')

const {capes, capeIds, getCapeData, htmlCapes} = require('./data/capes');

console.log(htmlCapes);
var app = express();

app.set('view engine', 'hbs'); // set express related configurations
app.use(express.static('views'));

hbs.registerHelper('screamIt', (text) => { // function is executed when called from hbs file
  return text.toUpperCase();
});

const port = process.env.PORT || 3010;

app.get('/', (req, res) => { // set up handler for http get request. ('url (/=root)', function to run on request)
  res.render('homepage.hbs');
});

app.get('/capes', (req, res) => { // set up handler for http get request. ('url (/=root)', function to run on request)
  res.render('capes.hbs', {capes: htmlCapes});
});

app.get('/capes/:id', (req, res) => {
  var capeId = req.params.id;

  if (capeIds.indexOf(capeId) > -1) {
    const capeData = getCapeData(capeId);
    res.render('capeFound.hbs', capeData);
  } else {
      res.render('capeNotFound.hbs', {capeId});
  }
});

app.get('/capes/:id/order', (req, res) => {
  var capeId = req.params.id;

  res.send('Cape was ordered!');

});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
