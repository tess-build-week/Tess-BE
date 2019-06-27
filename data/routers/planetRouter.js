const express = require('express');

const { definedValues, validatePlanetId } = require('../middleware/planetMiddleware');
const router = express.Router();
const planetModel = require('../models/planetModel');

router.get('/', definedValues, (req, res) => {
    planetModel.find(req.body.limit, req.body.offset)
        .then(planets => {
            res.status(200).json(planets);
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error retrieving planets from the database', 
                error
            })
        })
});

router.get('/id', validatePlanetId, (req, res) => {
    res.status(200).json(req.planet);
});

// router.get('/filter', definedValues, (req, res) => {
//     planetModel.findBy(req.body.filter, req.body.limit, req.body.offset)
//         .then(planets => {
//             res.status(200).json(planet);
//         })
//         .catch(error => {
//             res.status(500).json({
//                 message: 'Error filtering the planet database.',
//                 error
//             })
//         })
// });




module.exports = router;