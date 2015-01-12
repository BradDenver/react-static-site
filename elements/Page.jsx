var React = require('react'),
  Router = require('react-router'),
  Paths = require('./PathsMixin');
    
var Page = React.createClass({
  
  mixins: [Router.State, Paths],
  
  render: function() {
    var content = this.getPage();
      title = this.getPathMeta('title');
    return (
      <div>
        <h1>{title}</h1>
        <span dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
});

module.exports = Page;
