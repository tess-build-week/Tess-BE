
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('mockplanets').insert([
        {planetid: "HIP 65407 c", star_tessid: 199809518, orbit_period: 21.79994, planet_mass: 0.8401, planet_radius: 4.8544},
        {planetid: "Kepler-26 b", star_tessid: 90953987, orbit_period: 15.1087, planet_mass: 0.785, planet_radius: 1.8876},
        {planetid: "HAT-P-27 b", star_tessid: 191615340, orbit_period: 15.32631, planet_mass: 3.3107, planet_radius: 1.7924},
        {planetid: "PDS 70 b", star_tessid: 121389984, orbit_period: 8.17863, planet_mass: 2.4567, planet_radius: 2.9288},
        {planetid: "GJ 581 c", star_tessid: 392948127, orbit_period: 17.58766, planet_mass: 7.7889, planet_radius: 6.1926},
        {planetid: "Kepler-1199 b", star_tessid: 165884802, orbit_period: 29.35786, planet_mass: 0.0396, planet_radius: 0.9781},
        {planetid: "HD 224693 b", star_tessid: 300327684, orbit_period: 7.84587, planet_mass: 5.1533, planet_radius: 1.9077},
        {planetid: "K2-58 b", star_tessid: 445031952, orbit_period: 21.02001, planet_mass: 1.8187, planet_radius: 3.4692},
        {planetid: "WASP-6 b", star_tessid: 426585572, orbit_period: 20.00763, planet_mass: 1.5331, planet_radius: 0.6156},
        {planetid: "Kepler-306 e", star_tessid: 229342322, orbit_period: 9.37793, planet_mass: 3.0622, planet_radius: 1.8043}
      ]);
};
