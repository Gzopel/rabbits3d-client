const path = require('path');
const config = require(path.resolve('config', process.env.NODE_ENV));
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || config.port );