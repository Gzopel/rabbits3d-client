import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import config from '../webpack.dev.config';

const compiler = webpack(config);
const app = express();

// hot reload
app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  reload: true,
  publicPath: config.output.publicPath,
}));

app.use(WebpackHotMiddleware(compiler));

app.use(express.static(config.output.path));

app.listen(config.port);
console.log(`Listening at http://${config.host}:${config.port}`);
