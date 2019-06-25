const db = require('../dbConfig');
module.exports = {
    addUser,
    findBy,
    findById
}

async function addUser(user) {
   const [id] = await db('users')
        .insert(user, 'id');
        return findById(id);
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