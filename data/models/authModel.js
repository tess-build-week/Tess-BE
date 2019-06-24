const db = require('../dbConfig');


module.exports = {
    addUser,
    findBy
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