const express = require('express'); // LLAMANDO EXPRESS
const logger = require('morgan');

const app = express(); // express se asigna a una variable

app.use(logger('dev'));
app.use(express.json()); // configuro uso de objetos a traves de las rutas


const indexRouter = require('./router/index'); //indexo el ruteador
const apiRouter = require('./router/api');
const {connect} = require('./db/connect');
app.use('/index', indexRouter);
app.use('/api', apiRouter);
connect();

module.exports = app;