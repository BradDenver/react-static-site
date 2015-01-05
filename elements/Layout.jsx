var React = require('react'),
  LayoutNav = require('./LayoutNav.jsx');
  Router = require('react-router');
  RouteHandler = Router.RouteHandler,
  paths = require('../paths.js');

var Layout = React.createClass({
  mixins: [Router.State],

  getDefaultProps: function() {
    return {title: 'React Static Site'};
  },

  render: function() {
    var script = (process.env.NODE_ENV!=='production') ? <script src="http://localhost:3000/scripts/bundle.js"></script> : '';
    var title = paths.titleForPath(this.getPathname()) + ' - React Static Site';
    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          <div id="layout">
            <LayoutNav/>
            <main role="main">
              {this.props.children}
              <RouteHandler/>
            </main>
          </div>
          {script}
        </body>
      </html>
    );
  }
});

module.exports = Layout;
