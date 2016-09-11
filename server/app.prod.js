import express from 'express';
import config from '../webpack.prod.config';

const app = express();

app.use(express.static(config.output.path));

app.listen(process.env.PORT);
console.log(`Listening at http://${process.env.HOST}:${process.env.PORT}`);
