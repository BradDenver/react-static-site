var paths = require('../paths'),
  React = require('react');

var Paths = {

  contextTypes: {
    getCurrentPathname: React.PropTypes.func.isRequired,
    getCurrentParams: React.PropTypes.func.isRequired
  },

  getAllPosts: function() {
    return paths.allPosts();
  },

  getPathMeta: function(key) {
    var path = this.context.getCurrentPathname();
    var post = this.context.getCurrentParams().post;
    if(post) {
      return paths.allPosts()[post][key];
    }
    return paths.allPaths()[path][key];
  },

  getPage: function() {
    return paths.pageForPath(this.context.getCurrentPathname());
  },

  getPost: function() {
    return paths.postForPath(this.context.getCurrentParams().post);
  },

  getPreviewForPost: function(post) {
    var postMeta = paths.allPosts()[post];
    if(postMeta.preview) {
      return postMeta.preview;
    }
    // else return the first line from the markdown
    var md = paths.postForPath(post);
    return md.substr(0, md.indexOf('\n'));
  }

};

module.exports = Paths;
