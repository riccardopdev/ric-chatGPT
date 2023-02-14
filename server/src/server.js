const results = require('dotenv').config();

if(results.error) {
    throw results.error;
}

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT_NUMBER || 8000;

/* Routes */
const apiRouter = require('./routes/api.router');

//Implement CORS. Allow React client on port 3000 to make requests to the server api on port 5000
app.use(cors({origin: 'http://localhost:3000'}));

//Allow us to parse the body to json
app.use(express.json());

app.use('/api', apiRouter);

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
}

startServer();