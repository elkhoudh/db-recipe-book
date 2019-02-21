// Update with your config settings.
const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "pg",
    connection:
      "postgres://wniisgorwnahqa:3bcd0a3d4df2559871b7a95d9d34812b0cbd0ca45e7e0b63ba3d67fbf262cc36@ec2-54-225-237-84.compute-1.amazonaws.com:5432/dcf4018mto3p33",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    useNullAsDefault: true
  }
};
