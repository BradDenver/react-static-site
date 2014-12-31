var React = require('react');

var Layout = React.createClass({
  render: function() {
    var script = (process.env.NODE_ENV!=='production') ? <script src="http://localhost:3000/scripts/bundle.js"></script> : '';
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          {this.props.children}
          {script}
        </body>
      </html>
    );
  }
});

module.exports = Layout;
