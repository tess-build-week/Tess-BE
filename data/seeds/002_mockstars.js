
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('stars').insert([
          {tessid: 199809518, twomass: "51245932-5641816", gaiaid: 41489234669675, sector: "s0001-s0002", magnitude: 19, luminosity: 1.773, star_mass: 36, star_radius: 48, constellation: "Cetus", disposition: "b", rightascension: "28:42:55.656", declination: "-12:24:97.737"}, 
          {tessid: 90953987, twomass: "82783475-1467761", gaiaid: 27795380825279, sector: "s0001-s0002", magnitude: 8, luminosity: 1.3911, star_mass: 31, star_radius: 46, constellation: "Canis Minor", disposition: "a", rightascension: "29:40:41.652", declination: "-60:48:58.143"}, 
          {tessid: 191615340, twomass: "51983424-2083802", gaiaid: 51241116434274, sector: "s0002-s0004", magnitude: 17, luminosity: 3.0679, star_mass: 55, star_radius: 25, constellation: "Orion", disposition: "c", rightascension: "96:95:47.392", declination: "-39:80:24.208"},
          {tessid: 121389984, twomass: "49520223-1956825", gaiaid: 13349001516792, sector: "s0002-s0004", magnitude: 14, luminosity: 1.8582, star_mass: 92, star_radius: 55, constellation: "Leo Minor", disposition: "c", rightascension: "94:86:37.461", declination: "-59:79:61.566"},
          {tessid: 392948127, twomass: "48547844-1802640", gaiaid: 10339287657377, sector: "s0001-s0003", magnitude: 19, luminosity: 1.3798, star_mass: 83, star_radius: 48, constellation: "Leo Minor", disposition: "c", rightascension: "71:13:32.655", declination: "-22:77:12.786"},
          {tessid: 165884802, twomass: "44784819-3342425", gaiaid: 5104630495577, sector: "s0001-s0002", magnitude: 14, luminosity: 2.4533, star_mass: 90, star_radius: 57, constellation: "Orion", disposition: "b", rightascension: "50:88:49.169", declination: "-60:64:43.628"},
          {tessid: 300327684, twomass: "21386964-1052002", gaiaid: 49108786455240, sector: "s0001-s0003", magnitude: 19, luminosity: 2.0462, star_mass: 21, star_radius: 47, constellation: "Orion", disposition: "a", rightascension: "52:54:39.462", declination: "-45:37:45.387"},
          {tessid: 445031952, twomass: "61205303-4833759", gaiaid: 77986795925817, sector: "s0002-s0003", magnitude: 21, luminosity: 2.3048, star_mass: 69, star_radius: 35, constellation: "Leo Minor", disposition: "b", rightascension: "31:53:62.283", declination: "-93:35:22.129"},
          {tessid: 426585572, twomass: "45588323-9536267", gaiaid: 25297282547060, sector: "s0002-s0003", magnitude: 15, luminosity: 1.8903, star_mass: 45, star_radius: 2, constellation: "Andromeda", disposition: "a", rightascension: "84:60:33.460", declination: "-43:97:99.765"},
          {tessid: 229342322, twomass: "28970626-8539176", gaiaid: 70039854222916, sector: "s0002-s0003", magnitude: 16, luminosity: 1.0169, star_mass: 39, star_radius: 35, constellation: "Corvus", disposition: "b", rightascension: "46:25:40.670", declination: "-34:22:79.286"}
      ]);
};
