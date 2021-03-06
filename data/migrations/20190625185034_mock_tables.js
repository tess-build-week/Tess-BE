
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', users => {
        users.increments();

        users
            .string('username', 128)
            .notNullable()
            .unique();
        users
            .string('password', 128)
            .notNullable();
    })
    .createTable('mockstars', tbl => {
        tbl
            .integer('tessid')
            .unique()
            .notNullable();
        tbl
            .string('twomass', 255);
        tbl
            .bigInteger('gaiaid');
        tbl
            .string('sector');
        tbl
            .integer('magnitude');
        tbl
            .string('luminosity');
        tbl
            .integer('star_mass');
        tbl
            .integer('star_radius');
        tbl
            .string('constellation');
        tbl
            .string('disposition');
        tbl
            .string('rightascension');
        tbl
            .string('declination');
    })
    .createTable('mockplanets', tbl => {
        tbl
            .string('planetid')
            .unique()
            .notNullable();
        
        tbl
            .integer('star_tessid')
            .unsigned()
            .notNullable()
            .references('tessid')
            .inTable('mockstars')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        
        tbl
            .float('orbit_period');
        tbl
            .float('planet_mass');
        tbl
            .float('planet_radius');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('mockplanets')
    .dropTableIfExists('mockstars')
    .dropTableIfExists('users');
};
