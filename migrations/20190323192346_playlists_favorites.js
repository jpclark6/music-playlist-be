exports.up = function (knex, Promise) {
  return knex.schema.createTable("playlists", function (table) {
    table.increments();
    table.string("playlist_name");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("playlists");
};
