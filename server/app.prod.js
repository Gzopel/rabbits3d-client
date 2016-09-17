import express from 'express';
import winston from 'winston';
import config from '../webpack.prod.config';

const app = express();

app.use(express.static(config.output.path));

app.listen(process.env.PORT);
winston.log(`Listening at http://${process.env.HOST}:${process.env.PORT}`);
