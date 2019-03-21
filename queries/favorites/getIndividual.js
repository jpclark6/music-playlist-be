const connection = require("../connection");

function getIndividual(song_id) {
  return connection("favorites").where({ id: song_id });
}


module.exports = getIndividual;
