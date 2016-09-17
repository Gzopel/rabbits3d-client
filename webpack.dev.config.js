const webpack = require('webpack');
const base = require('./webpack.base');

base.host = 'localhost';
base.port = 1234;

base.devtool = 'source-map';
base.entry = [
  'webpack-hot-middleware/client',
].concat(base.entry);

base.plugins = base.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);

module.exports = base;
