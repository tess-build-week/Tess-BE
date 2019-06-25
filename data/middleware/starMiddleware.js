const starModel = require('../models/starModel');

module.exports = {
    definedValues,
    validateTessId
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


function validateTessId(req, res, next) {
    if (req.params.id) {
        starModel.findByTessId(req.params.id)
            .then(star => {
                if (star.tessid) {
                    req.star = star;
                    next();
                } else {
                    res.status(404).json({
                        message: `Star not found with tessID: ${req.params.id}`
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error completing .get Request for star info'
                })
            })
        }
}