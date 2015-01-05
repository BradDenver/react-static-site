var React = require('react'),
  Router = require('react-router');
  Route = Router.Route,
  NotFoundRoute = Router.NotFoundRoute,
  DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler,
  Layout = require('./Layout.jsx'),
  Page = require('./Page.jsx');


// create the index.html to be used by webpack
var Routes = (
  <Route name="home" path="/" handler={Layout}>
    <Route name="about" handler={Page}/>
    <DefaultRoute handler={Page}/>
  </Route>
);

module.exports = Routes;
