const planetModel = require('../models/planetModel');

module.exports = {
    definedValues,
    validatePlanetId
}

function definedValues(req, res, next) {
    if (req.body.limit && req.body.offset) {
        next();
    } else {
        req.body.limit = 10;
        req.body.offset = 0;
        next();
    }
};


function validatePlanetId(req, res, next) {
    if (req.params.id) {
        planetModel.findById(req.params.id)
            .then(planet => {
                if (planet.star_tessid) {
                    req.planet = planet;
                    next();
                } else {
                    res.status(404).json({
                        message: `Planet not found with ID: ${req.params.id}`
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error completing .get Request for planet info'
                })
            })
        }
}