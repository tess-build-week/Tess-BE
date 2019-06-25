const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Lambda', password: bcrypt.hashSync('password', 8)},
        {username: 'Michael', password: bcrypt.hashSync('password', 8)},
      ]);
    };
