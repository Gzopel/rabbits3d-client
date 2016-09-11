var webpack = require('webpack');
var base = require('./webpack.base');

base.devtool = 'source-map';
base.plugins = base.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'production'",
    },
  }),
]);

module.exports = base;
