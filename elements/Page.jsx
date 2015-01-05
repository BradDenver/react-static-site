var React = require('react'),
  Router = require('react-router');
    
var Page = React.createClass({
  
  mixins: [Router.State],
  
  render: function() {
    var content = paths.pageForPath(this.getPathname()),
      title = paths.titleForPath(this.getPathname());
    return (
      <div>
        <h1>{title}</h1>
        <span dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
});

module.exports = Page;
