const db = require('../dbConfig');
module.exports = {
    addUser,
    findBy,
    findById,
    getAll
}

async function addUser(user) {
   await db('users')
        .insert(user, 'id');
        return findBy({username: user.username});
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

function getAll() {
    return db('users');
}