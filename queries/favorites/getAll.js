const connection = require("../connection");

function getAll() {
  return connection.select().from("favorites");
}

module.exports = getAll;
