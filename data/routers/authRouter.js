const express = require('express');
const bcrypt = require('bcryptjs');

const model = require('../models/authModel');
const restricted = require('../middleware/restricted');

const router = express.Router();


//generate token
const jwt = require('jsonwebtoken');
const secrets = require('../secrets/secret');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secrets.jwtSecret, options);
}

router.get('/', (req, res) => {
    res.send(`<h3> Auth Router is online </h3>`)
})

//Register

router.post('/register', (req, res) => {
    let info = req.body;
    //console.log(info);
    const hash = bcrypt.hashSync(info.password, 8);
    info.password = hash; //Storing hash as password
    //console.log(info);

    model.addUser(info)
        .then(saved => {
            res.status(201).json({
                message: 'User registered.', 
                saved
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error while registering user',
            });
        })
});


//Login

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    model.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user); 
                res.status(200).json({
                    message: `Welcome ${user.username}, token generated.`,
                    token
                })
            } else {
                res.status(401).json({
                    message: 'Invalid Credentials.'
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error during Login.",
                error
            })
        })
})

//Checking restricted middleware

// router.get('/tokenTest', restricted, (req, res) => {
//     res.send(`<h3> You have a token, good work </h3>`)
// })


module.exports = router;