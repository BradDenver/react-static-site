var express = require('express');
var app = express(),
  port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public', {'extensions': ['html']}));

app.listen(port, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost' + port);
});
