const model = require('../models/authModel');

module.exports = {
    registerMid
}

//checks if a user already exists with the provided username, or if no req.body was provided at all.
function registerMid(req, res, next) {
    if (req.body.username && req.body.password) {
        model.findBy({username: req.body.username})
            .then(user => {
                if (user.length > 0) {
                    res.status(409).json({
                        message: 'Username already taken.'
                    })
                } else {
                    next();
                }
            })
    } else {
        res.status(400).json({message: 'You must provide a username and password in order to register'})
    }
}