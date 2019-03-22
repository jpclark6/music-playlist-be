const connection = require("../connection");

function edit(id, attributes) {
  return connection
    .from("favorites")
    .where({ id })
    .update(attributes);
}

module.exports = edit;
