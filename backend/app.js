const express = require('express');
const logger = require('morgan');
const cors = require("cors")
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);

module.exports = app;
