// Update with your config settings.
const config = require("./config");

module.exports = {
  client: "pg",
  connection: `postgres://${process.env.USER}@127.0.0.1:5432/vocabulary`,
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
