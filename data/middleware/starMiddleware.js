const starModel = require('../models/starModel');

module.exports = {
    definedValues,
    validateTessId
}


//checks for a limit for the data, if there is none it passes defaults
function definedValues(req, res, next) {
    console.log(req.body);
    if (req.body.limit > 0) {
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
                //console.log('inside .then')
                //console.log(star);
                if (star.tessid) {
                    //console.log(star);
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