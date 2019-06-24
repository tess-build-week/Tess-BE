//middleware to check for token. Must have one in order to access the route.

const jwt = require('jsonwebtoken');
const secrets = require('../secrets/secret');

module.exports = (req, res, next) => {
    const token = req.headers.authorization; //where token must be stored

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
            if (err) {
                res.status(401).json({
                    message: 'Invalid Token.',
                });
            } else {
                next();
            }
        })
    } else {
        return res.status(401).json({
            message: 'No token provided. It must be set on the authorization header.'
        })
    }
}