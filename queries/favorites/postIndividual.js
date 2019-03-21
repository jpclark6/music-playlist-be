const connection = require("../connection");

function postIndividual(songInfo) {

  // for (let requiredParameter of ['favorites']) {
  //   if (!songInfo[requiredParameter]) {
  //     return response
  //       .status(422)
  //       .send({ error: `Expected format: {favorites: {name: <name>, artist_name: <artist_name>, genre: <genre>, rating: <rating>} }. You're missing a "${requiredParameter}" property.` });
  //   }
  // }
  let song = songInfo.favorites;
  return connection('favorites').insert(song, 'name')
}


module.exports = postIndividual;
