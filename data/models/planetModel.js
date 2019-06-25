const db = require('../dbConfig');


module.exports = {
    findBy,
    findById,
    find,
    addPlanet,
    updatePlanet,
    removePlanet
}

//returns all the of the planets in the db
function find() {
    return db('exoplanets');
};

//should return one planet
function findById(id) {
    return db('exoplanets')
        .where({ id });
}

//may return many planets, not sure how this one will work without data.
function findBy(filter) {
    return db('exoplanets')
        .where(filter)
}