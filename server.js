
var fs = require('fs'),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config'),
  port = process.env.port || 3000;


// create the index.html to be used by webpack
var page = require('./dev/bundlePage.js');
fs.writeFileSync('dev/index.html', page('/'));

var server = new WebpackDevServer(webpack(config[0]), {
  contentBase: './dev',
  publicPath: config[0].output.publicPath,
  hot: true
});
// allow server to render any route
server.use('/', function(req, res) {
  res.send(page(req));
});
server.listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + port);
});
