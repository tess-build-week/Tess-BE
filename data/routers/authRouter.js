const express = require('express');
const bcrypt = require('bcryptjs');

const model = require('../models/authModel');
const { generateToken } = require('../middleware/generateToken');

//Register


router.post('/register', (req, res) => {
    let info = req.body;
    const hash = bcrypt.hashSync(info.password, 8);
    info.password = hash; //Storing hash as password

    model.addUser(info)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
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





module.exports = router;