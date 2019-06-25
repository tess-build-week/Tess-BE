const db = requiure('../dbConfig');

module.exports = {
    findBy,
    findById,
    find,
    addStar,
    updateStar,
    removeStar
}

//returns all the of the stars in the db
function find() {
    return db('stars');
};

//should return one stars
function findById(id) {
    return db('stars')
        .where({ id });
}

//may return many stars, not sure how this one will work without data.
function findBy(filter) {
    return db('stars')
        .where(filter)
}