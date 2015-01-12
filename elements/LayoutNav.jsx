var React = require('react');
  Router = require('react-router'),
  Link = Router.Link;

var LayoutNav = React.createClass({
  render: function() {
    return (
      <nav id="layout-nav">
        <div className="pure-menu pure-menu-open">
          <a className="pure-menu-heading">Site Nav</a>

          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = LayoutNav;
