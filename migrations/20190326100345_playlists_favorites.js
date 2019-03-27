exports.up = function(knex, Promise) {
  return knex.schema.createTable("playlists_favorites", function(table) {
    table.increments();
    table
      .integer("favorite_id")
      .notNullable()
      .references("id")
      .inTable("favorites")
      .onDelete("cascade");

    table
      .integer("playlist_id")
      .notNullable()
      .references("id")
      .inTable("playlists")
      .onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("playlists_favorites");
};
