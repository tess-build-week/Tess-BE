const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./data/routers/authRouter');
const planetRouter = require('./data/routers/planetRouter');
const starRouter = require('./data/routers/starRouter');

const server = express();
server.use(express.json(), helmet(), cors());


server.get('/', (req, res) => {
    res.status(200).json({api: 'Online'});
});


server.use('/auth', authRouter);
server.use('/planets', planetRouter);
server.use('/stars', starRouter);


module.exports = server;