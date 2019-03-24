exports.up = function(knex, Promise) {
  return knex.schema.table("favorites", function(table) {
    table.integer('playlist_id').unsigned().references('playlists.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("playlists", function(table){
    table.dropColumn('playlist_id')
  });
};
