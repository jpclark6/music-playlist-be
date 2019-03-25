const connection = require("../connection");

function getAll() {
  return connection.select().from('playlists').join('favorites', 'playlists.id', '=', 'favorites.id')
}

module.exports = getAll;
