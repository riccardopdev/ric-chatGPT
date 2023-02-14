const results = require('dotenv').config();

if(results.error) {
    throw results.error;
}

const express = require('express');
const app = express();

const PORT = process.env.PORT_NUMBER || 8000;

/* Routes */
const apiRouter = require('./routes/api.router');

//Allow us to parse the body to json
app.use(express.json());

app.use('/api', apiRouter);

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
}

startServer();