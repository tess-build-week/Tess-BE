const db = require('../dbConfig');


module.exports = {
    addUser,
    findBy,
    findById
}


function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findBy(id);
        });
}

function findBy(filter) {
    return db('users')
        .where(filter);
}

function findById(id) {
    return db('users')
        .where( { id })
        .first();
}