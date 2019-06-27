const planetModel = require('../models/planetModel');

module.exports = {
    definedValues,
    validatePlanetId
}

function definedValues(req, res, next) {
    if (req.body.limit && req.body.offset) {
        next();
    } else if (req.body.limit) {
        req.body.offset = 0;
        next();
    } else {
        req.body.limit = 10;
        req.body.offset = 0;
        next();
    }
};


function validatePlanetId(req, res, next) {
    console.log(req.body.id);
    if (req.body.id.length > 0) {
        planetModel.findById(req.body.id)
            .then(planet => {
                console.log(planet);
                if (planet.star_tessid) {
                    req.planet = planet;
                    next();
                } else {
                    res.status(404).json({
                        message: `Planet not found with ID: ${req.body.id}`
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error completing .get Request for planet info'
                })
            })
        } else {
            res.status(500).json({ message: 'Please provide an id within the request body.'})
        }
}