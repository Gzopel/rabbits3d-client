var webpack = require('webpack');
var base = require('./webpack.base');

base.devtool = 'source-map';
base.plugins = base.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'production'",
    },
  }),
]);

export default base;
