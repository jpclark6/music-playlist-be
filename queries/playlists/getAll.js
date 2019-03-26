const connection = require("../connection");

function getAll() {
  return connection.select().from('playlists').join('playlists_favorites', 'playlists.id', '=', 'playlist_id').join("favorites", "favorite_id", '=', "favorites.id")
}

module.exports = getAll;
