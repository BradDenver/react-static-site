var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public', {'extensions': ['html']}));

app.listen(4000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:4000');
});
