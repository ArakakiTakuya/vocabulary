// Update with your config settings.
require("dotenv").config();

module.exports = {
  client: "postgresql",
  connection: process.env.DATABASE_URL || process.env.LOCAL_CONFIG,
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
};
