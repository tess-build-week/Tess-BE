const starModel = require('../models/starModel');

module.exports = {
    definedValues,
    validateTessId
}


//checks for a limit for the data, if there is none it passes defaults
function definedValues(req, res, next) {
    //console.log(req.body);
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
                }
            })
            .catch(error => {
                res.status(404).json({
                    message: `No star found with Tess ID ${req.params.id}`
                })
            })
        }
}