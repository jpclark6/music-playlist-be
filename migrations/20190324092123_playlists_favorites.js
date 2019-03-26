exports.up = function(knex, Promise) {
  return knex.schema.createTable("playlists_favorites", function(table) {
    table
      .integer("favorite_id")
      .unsigned()
      .references("favorites.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("playlists_favorites");
};
