exports.up = function(knex, Promise) {
  return knex.schema.createTable("favorites", function(table) {
    table.increments();
    table.string("name");
    table.string("artist_name");
    table.string("genre");
    table.integer("rating");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("favorites");
};
