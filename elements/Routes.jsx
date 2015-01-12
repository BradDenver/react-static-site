var React = require('react'),
  Router = require('react-router');
  Route = Router.Route,
  NotFoundRoute = Router.NotFoundRoute,
  DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler,
  Layout = require('./Layout.jsx'),
  Blog = require('./Blog.jsx'),
  Post = require('./Post.jsx'),
  Page = require('./Page.jsx');


// create the index.html to be used by webpack
var Routes = (
  <Route name="home" path="/" handler={Layout}>
    <Route name="about" handler={Page}/>
    <Route name="blog" handler={Blog}/>
    <Route name="post" path="/blog/:post" handler={Post}/>
    <DefaultRoute handler={Page}/>
  </Route>
);

module.exports = Routes;
