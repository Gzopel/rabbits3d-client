module.exports = {
    entry: ['./views/index.js'],

    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
            plugins: ['transform-runtime']
        }]
    }
}