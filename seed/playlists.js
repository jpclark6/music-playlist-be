
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      return knex('table_name').insert([
        {id: 1, playlist_name: 'chill_tunes'},
        {id: 2, playlist_name: 'good_vibes'},
        {id: 3, playlist_name: 'hump_day_happiness'}
      ]);
    });
};
