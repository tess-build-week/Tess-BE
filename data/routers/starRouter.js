const express = require('express');


const router = express.Router();
const starModel = require('../models/starModel');
const { definedValues, validateTessId } = require('../middleware/starMiddleware');


//get 10 stars' data by default, but can be passed values for limit and offset
//in order to get more or less, or data found later in the db
router.get('/', definedValues, (req, res) => {
    starModel.find(req.body.limit, req.body.offset)
        .then(stars => {
            res.status(200).json(stars)
        })
        .catch(error => {
            res.status(500).json({
                message: "Error retrieving stars from the database",
                error
            })
        })
})


//get a star by a specific tessid - middleware insures it's a valid id and grabs the info.
router.get('/:id', validateTessId, (req, res) => {
    res.status(200).json(req.star);
})

//get a list of stars by a filter, and set a limit/offset for the data
router.get('/filter', definedValues, (req, res) => {
    starModel.findBy(req.body.filter, req.body.limit, req.body.offset)
        .then(stars => {
            res.status(200).json(stars)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


//get the planets associated with a stars tessid
router.get('/:id/planets', validateTessId, (req, res) => {
    starModel.findPlanetsByTessId(req.params.id)
        .then(planets => {
            res.status(200).json(planets);
        })
        .catch(error => {
            res.status(500).json({
                message: "Error retrieving the star's planets",
                error
            })
        })
})

module.exports = router;