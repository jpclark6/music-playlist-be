const connection = require("../connection");

function getAll() {
  return connection
    .from("playlists")
    .leftOuterJoin("playlists_favorites", "playlists.id", "=", "playlist_id")
    .leftOuterJoin("favorites", "favorite_id", "=", "favorites.id")
    .select([
      "playlists.id",
      "playlist_name ",
      connection.raw("JSON_AGG(favorites) as favorites")
    ])
    .groupBy("playlists.id");
}

module.exports = getAll;
