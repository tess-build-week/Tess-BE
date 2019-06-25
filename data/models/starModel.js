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

//returns a limited number the of the stars in the db, offset by num
function find(lim, off) {
    return db('stars')
        .limit(lim)
        .offset(off)
};

//should return one stars
function findByTessId(tessid) {
    return db('stars')
        .where({ tessid });
}

//may return many stars, not sure how this one will work without data.
function findBy(filter, lim, off) {
    return db('stars')
        .where(filter)
        .limit(lim)
        .offset(off);
}

function findPlanetsByTessId(tessid) {
    return db('planets')
        .where({ star_tessid: tessid });
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