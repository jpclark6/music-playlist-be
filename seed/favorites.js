
exports.seed = function(knex, Promise) {
  return knex('favorites').del()
    .then(function () {
      return knex('favorites').insert([
        {id: 1, name: 'Leo', artist_name: 'John', genre: 'Pop', rating: 42, playlist_id: 1},
        { id: 2, name: 'Dan', artist_name: 'Deer', genre: 'Rock', rating: 52, playlist_id: 1},
        { id: 3, name: 'Nick', artist_name: 'Legend', genre: 'Rap', rating: 12, playlist_id: 2}
      ]);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
