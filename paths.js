var paths = {
  '/': {
    'title': 'Home',
    'page': './home.html'
  },
  '/about': {
    'title': 'About',
    'page': './about.html'
  }
};

var pageReq = require.context('./pages', false, /^\.\/.*\.html$/);

module.exports = {
  allPaths: function() {
    return paths;
  },
  pageForPath: function(path) {
    return pageReq(paths[path].page);
  },
  titleForPath: function(path) {
    return paths[path].title;
  }
};

