require('node-jsx').install();

var fs = require('fs'),
  React = require('react'),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config'),
  Layout = require('./elements/Layout.jsx');


// create the index.html to be used by webpack
fs.writeFileSync('dev/index.html', React.renderToString(React.createElement(Layout, {
  title: 'React Static Site',
  children: 'Hello World'
})));

var server = new WebpackDevServer(webpack(config), {
  contentBase: './dev',
  publicPath: config.output.publicPath,
  hot: true
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
