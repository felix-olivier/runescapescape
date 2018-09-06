const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs'); // set express related configurations
app.use(express.static('public'));
const port = process.env.PORT || 3010;

app.get('/', (req, res) => { // set up handler for http get request. ('url (/=root)', function to run on request)
  // res.send('Test');
  res.render('imageTest.hbs');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
