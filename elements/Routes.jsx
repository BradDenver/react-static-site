var React = require('react'),
  Router = require('react-router');
  Route = Router.Route,
  NotFoundRoute = Router.NotFoundRoute,
  DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler,
  Layout = require('./Layout.jsx'),
  Home = require('./Home.jsx'),
  About = require('./About.jsx');


// create the index.html to be used by webpack
var Routes = (
  <Route name="home" path="/" handler={Layout}>
    <Route name="about" handler={About}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = Routes;
