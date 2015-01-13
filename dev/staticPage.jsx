var React = require('react'),
  Router = require('react-router'),
  Routes = require('../elements/Routes.jsx');

module.exports = function(url) {
  var html;
  Router.run(Routes, url,  function (Handler) {
    html =  React.renderToStaticMarkup(React.createElement(Handler, null));
  });
  return html;
};

