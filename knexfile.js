// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seed",
    },
  },

  staging: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
