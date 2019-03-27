const connection = require("../connection");

function postSong(attributes) {
  return connection("playlists_favorites").insert(attributes);
}

module.exports = postSong;
