const connection = require("../connection");

function deleteSong(id) {
  return connection
    .from("favorites")
    .where({ id })
    .del()
}

module.exports = deleteSong;
