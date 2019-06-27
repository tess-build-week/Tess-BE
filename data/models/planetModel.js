const db = require('../dbConfig');


module.exports = {
    // findBy,
    findById,
    find,
    // addPlanet,
    // updatePlanet,
    // removePlanet
}

//returns all the of the planets in the db
function find(lim, off) {
    return db('planets')
        .limit(lim)
        .offset(off);
};

//should return one planet -- PlanetID won't really work because it's a string. Might need to be passed into req.body rather than as a parameter for this reason. 
function findById(planetid) {
    return db('planets')
        .where({ planetid })
        .first();
}


//may return many planets, not sure how this one will work without data.
// function findBy(filter, lim, off) {
//     return db('planets')
//         .where(filter)
//         .first();
// }

//Not using all of the CRUD api, so I've commented these out.

// function addPlanet(planetinfo) {
//     return db('planets')
//         .insert(planetinfo)
// }

// function updatePlanet(planetid, changes) {
//     return db('planets')
//         .where({ planetid })
//         .update(changes)
// }

// function removePlanet(planetid) {
//     return db('planets')
//         .where({ planetid })
//         .del()
// };