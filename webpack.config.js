var webpack = require('webpack');

var outputPath = __dirname + '/dev',
  outputPublicPath =  'http://localhost:3000/scripts/';

var resolveCommon = {
  // Allow to omit extensions when requiring these files
  extensions: ['', '.js', '.jsx']
};

var moduleCommon = {
  loaders: [
    // Pass *.css files through css-loader and style-loader transforms
    { test: /\.css$/, loader: 'style!css' },
    // Pass *.jsx files through jsx-loader transform
    { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
    { test: /\.html$/, loader: 'raw' },
    { test: /\.md$/, loader: 'raw!markdown' },
  ]
};

module.exports = [
  {
    name: 'browser',
    // Entry point for static analyzer:
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './dev/entry.jsx'
    ],

    output: {
      // Where to put build results when doing production builds:
      path: outputPath,

      // JS filename you're going to use in HTML
      filename: 'bundle.js',

      // Path you're going to use in HTML
      publicPath: outputPublicPath,
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    resolve: resolveCommon,

    module: moduleCommon
  },
  {
    name: 'server',

    target: 'node',

    // Entry point for static analyzer:
    entry: {
      bundlePage: './dev/page.jsx',
      bundleStaticPage: './dev/staticPage.jsx'
    },

    output: {
      // Where to put build results when doing production builds:
      path: outputPath,

      // JS filename you're going to use in HTML
      filename: '[name].js',

      // Path you're going to use in HTML
      publicPath: outputPublicPath,

      libraryTarget: "commonjs2"
    },

    resolve: resolveCommon,

    module: moduleCommon
  }
];
