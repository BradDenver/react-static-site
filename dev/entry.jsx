var React = require('react'),
  Router = require('react-router'),
  Routes = require('../elements/Routes.jsx');

require('../bower_components/pure/pure.css');
require('../elements/style.css');

Router.run(Routes, Router.HistoryLocation,  function (Handler) {
  React.render(React.createElement(Handler, null), document);
});

