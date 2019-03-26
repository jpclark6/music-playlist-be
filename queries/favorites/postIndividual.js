const connection = require("../connection");

function postIndividual(attributes) {
  // for (let requiredParameter of ['favorites']) {
  //   if (!songInfo[requiredParameter]) {
  //     return response
  //       .status(422)
  //       .send({ error: `Expected format: {favorites: {name: <name>, artist_name: <artist_name>, genre: <genre>, rating: <rating>} }. You're missing a "${requiredParameter}" property.` });
  //   }
  // }
  return connection("favorites").insert(attributes);
}

module.exports = postIndividual;
