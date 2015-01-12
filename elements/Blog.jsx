var React = require('react'),
  Router = require('react-router'),
  Link  = Router.Link,
  Moment  = require('./Moment.jsx'),
  Paths = require('./PathsMixin'),
  _ = require('underscore');
    
var Blog = React.createClass({
  
  mixins: [Router.State, Paths],
  
  render: function() {
    var self = this,
      title = this.getPathMeta('title'),
      momentStyle = {fontSize: '0.5em'},
      quoteStyle = {
        margin: '0 1em 1em 1em',
        fontStyle: 'italic'
      },
      titleStyle = {fontSize: '1.5em'},
      ulStyle = {
        listStyle: 'none',
        paddingLeft: 0
      };
    return (
      <div>
        <h1>{title}</h1>
        <ul style={ulStyle}>
        { 
          _.map(this.getAllPosts(), function(post, key) {
            return <li key={key}>
              <div style={titleStyle}>
                <Link key={key} to={'/blog/' + key}>{post.title}</Link>
                <br/>
                <Moment datetime={post.published} style={momentStyle} />
              </div>
              <div>
                <blockquote style={quoteStyle}>{self.getPreviewForPost(key)}</blockquote>
              </div>
            </li>
          })
        }
        </ul>
      </div>
    );
  }
});

module.exports = Blog;
