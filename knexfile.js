// Update with your config settings.
const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "pg",
    connection:
      "postgres://adwwrtjbyranxt:76de0ba755849cc306f41b431e4890eb6bd7eaf84c327097401d14cc036a6ae6@ec2-107-21-99-237.compute-1.amazonaws.com:5432/dg68gff987bi9",
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
