module.exports = {
  entry: ['./views/index.js'],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react',
      plugins: ['transform-runtime'],
    }],
  },
};
