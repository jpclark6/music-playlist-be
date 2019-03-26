
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        {id: 1, playlist_name: 'Chill Vibes'},
        {id: 2, playlist_name: 'Happy Tunes'},
        {id: 3, playlist_name: 'Saturday Sadness'}
      ]);
    });
};
