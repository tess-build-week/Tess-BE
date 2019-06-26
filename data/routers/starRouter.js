const express = require('express');


const router = express.Router();
const starModel = require('../models/starModel');
const { definedValues, validateTessId } = require('../middleware/starMiddleware');


//get 10 stars' data by default, but can be passed values for limit and offset
//in order to get more or less, or data found later in the db
router.get('/', definedValues, (req, res) => {
    console.log(req.body.limit, req.body.offset);
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
// router.get('/filter', definedValues, (req, res) => {
//     starModel.filterBy(req.body.filter, req.body.value, req.body.limit, req.body.offset)
//         .then(stars => {
//             res.status(200).json(stars)
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// })


//get the planets associated with a stars tessid
router.get('/:id/planets', validateTessId, (req, res) => {
    starModel.findPlanetsByTessId(req.params.id)
        .then(planets => {
            res.status(200).json(planets);
        })
        .catch(error => {
            res.status(500).json({
                message: "Error retrieving the star's planets.",
                error
            })
        })
})

//These next queries are just for the rubric. I will not be using the full CRUD system because we won't be altering any data in the db. 

//update a star. 
// router.put('/:id', validateTessId, (req, res) => {
//     starModel.updateStar(req.params.id, req.body)
//         .then(star => {
//             res.status(200).json({
//                 message: 'Star successfully updated.',
//                 star
//             })
//         })
//         .catch(error => {
//             res.status(500).json({
//                 message: 'Database error. Star was unable to be updated.'
//             })
//         })
// })

//delete a star

// router.delete('/:id', validateTessId, (req, res) => {
//         starModel.removeStar(req.params.id)
//             .then(result => {
//                 res.status(200).json({
//                     message: `${result} star was removed from the database.`
//                 })
//             })
//             .catch(error => {
//                 res.status(500).json({
//                     message: 'Database error. The star could not be deleted.'
//                 })
//             })
// })


//create a star

    // router.post('/', (req, res) => {
    //     starModel.addStar(req.body)
    //         .then(star => {
    //             res.status(201).json({
    //                 message: 'Star was successfully added to the database.',
    //                 star
    //             });
    //         })
    //         .catch(error => {
    //             res.status(500).json({
    //                 message: "Database error. Star wasn't added to the database.",
    //                 error
    //             });
    //         });
    // })

module.exports = router;