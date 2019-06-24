const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./data/routers/authRouter');

const server = express();
server.use(express.json(), helmet(), cors());


server.get('/', (req, res) => {
    res.send(`<h3> TESS api is online </h3>`);
})


server.use('/auth/', authRouter);


module.exports = server;