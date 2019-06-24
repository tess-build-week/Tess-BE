const bcrypt = require('bcryptjs');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Lambda', password: bcrypt.hashSync('password', 8)},
        {username: 'Michael', password: bcrypt.hashSync('password', 8)},
      ]);
    });
};
