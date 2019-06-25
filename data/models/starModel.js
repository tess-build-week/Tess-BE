const db = requiure('../dbConfig');

module.exports = {
    findBy,
    findByTessId,
    find,
    findPlanetsByTessId
    // addStar,
    // updateStar,
    // removeStar
}

//returns all the of the stars in the db
function find() {
    return db('stars');
};

//should return one stars
function findByTessId(tessid) {
    return db('stars')
        .where({ tessid });
}

//may return many stars, not sure how this one will work without data.
function findBy(filter) {
    return db('stars')
        .where(filter);
}

function findPlanetsByTessId(tessid) {
    return db('planets')
        .where({ tessid });
}

//Not using all of the CRUD api, so I've commented these out.

// function addStar(starinfo) {
//     return db('stars')
//         .insert(starinfo)
// }

// function updateStar(tessid, changes) {
//     return db('stars')
//         .where({ tessid })
//         .update(changes)
// }

// function removeStar(tessid) {
//     return db('stars')
//         .where({ tessid })
//         .del()
// };