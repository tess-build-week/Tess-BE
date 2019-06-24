const dbConnection = process.env.DATABASE_URL;
const { Client } = require('pg');
const client = new Client({
    host: 'tess.ccrn1c0nfkh1.us-east-2.rds.amazonaws.com',
    port: '5432',
    user: 'TESSadmin',
    password: 'cjjkmpsTESS'
})

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
    connection: client,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
