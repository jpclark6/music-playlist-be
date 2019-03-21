// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "music_playlist_be_development"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + `?ssl=true`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
