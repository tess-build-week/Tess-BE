const dbConnection = process.env.DATABASE_URL;


module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/data.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    ssl: true,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
