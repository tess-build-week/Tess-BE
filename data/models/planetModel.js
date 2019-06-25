const db = require('../dbConfig');


module.exports = {
    findBy,
    findById,
    find,
    // addPlanet,
    // updatePlanet,
    // removePlanet
}

//returns all the of the planets in the db
function find() {
    return db('exoplanets');
};

//should return one planet
function findById(planetid) {
    return db('exoplanets')
        .where({ planetid });
}

//may return many planets, not sure how this one will work without data.
function findBy(filter) {
    return db('exoplanets')
        .where(filter)
}

//Not using all of the CRUD api, so I've commented these out.

// function addPlanet(planetinfo) {
//     return db('planets')
//         .insert(planetinfo)
// }

// function updateplanet(planetid, changes) {
//     return db('planets')
//         .where({ planetid })
//         .update(changes)
// }

// function removeplanet(planetid) {
//     return db('planets')
//         .where({ planetid })
//         .del()
// };