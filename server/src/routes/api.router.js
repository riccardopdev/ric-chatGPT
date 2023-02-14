const express = require('express');

const openaiRequestsRouter = require('./openai/openaiRequests.router');
const api = express.Router();

api.use('/openai', openaiRequestsRouter);

module.exports = api;