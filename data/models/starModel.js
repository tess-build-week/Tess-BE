const db = require('../dbConfig');

module.exports = {
    // filterBy,
    findByTessId,
    find,
    findPlanetsByTessId,
    addStar,
    updateStar,
    removeStar
}

//Because there will be so much data in this table I've had to include a limit
//for most of the methods that grab numerous rows because otherwise you'll end up
//with way too much data. This gives the user the ability to pick how much data they want

//returns a limited number the of the stars in the db, offset by num
function find(lim, off) {
    return db('stars')
        .limit(lim)
        .offset(off)
};

//should return one stars
function findByTessId(id) {
    return db('stars')
        .where({ tessid: id })
        .first();
}

//may return many stars, not sure how this one will work without data. Not quite working.
// function filterBy(filt, value, lim, off) {
//     return db('stars')
//         .where({ filt: value })
//         .limit(lim)
//         .offset(off);
// }

function findPlanetsByTessId(tessid) {
    return db('planets')
        .where({ star_tessid: tessid });
}

//Not using all of the CRUD api, so I've commented these out.

function addStar(starinfo) {
    return db('stars')
        .insert(starinfo)
        .then(ids => {
            return findByTessId(ids[0]);
        });
}

function updateStar(tessid, changes) {
    return db('stars')
        .where({ tessid })
        .update(changes)
}

function removeStar(tessid) {
    return db('stars')
        .where({ tessid })
        .del()
};