
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlists_favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists_favorites').insert([
        {id: 1, favorite_id: 1, playlist_id: 1},
        {id: 2, favorite_id: 2, playlist_id: 2},
        {id: 3, favorite_id: 3, playlist_id: 3},
        {id: 4, favorite_id: 1, playlist_id: 3}
      ]);
    });
};
