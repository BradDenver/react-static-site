var paths = {
  '/': {
    'title': 'React Static Site'
  },
  '/about': {
    'title': 'About - React Static Site'
  }
};

module.exports = {
  allPaths: function() {
    return paths;
  },
  titleForPath: function(path) {
    return paths[path].title;
  }
};

