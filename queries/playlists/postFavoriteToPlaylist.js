const connection = require("../connection");

function postFavoriteToPlaylist(attributes) {
  return connection("playlists_favorites").insert(attributes);
}

module.exports = postFavoriteToPlaylist;
