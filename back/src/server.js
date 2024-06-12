const express = require('express');
const router = require('../src/routes/router');

const app = express();

app.use(router);

module.exports = app;