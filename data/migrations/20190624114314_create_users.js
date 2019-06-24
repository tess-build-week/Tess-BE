
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', users => {
        users.increments()

        users
            .string('username', 128)
            .notNullable()
            .unique();

        users
            .string('password', 128)
            .notNullable();
    })

    // .createTable('stars', stars => {
    //     stars.increments()

    //     stars
    //         .string('name', 128)
    //         .notNullable()
    //         .unique();
    // })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('users')
        // .dropTableIfExists('stars');
};
