
'use strict';

exports.seed = function(knex) {
  return knex('tracks').del()
    .then(() => {
      knex.raw("SELECT setval('artists_id_seq', (SELECT MAX(id) FROM artists))");
      return knex('tracks').insert([{
        id: 1,
        artist_id: 1,
        title: 'Shanghai Freeway',
      }, {
        id: 2,
        artist_id: 1,
        title: 'Szechuan',
      }, {
        id: 3,
        artist_id: 1,
        title: 'Battery',
      }, {
        id: 4,
        artist_id: 1,
        title: 'Ghost Raid',
      }, {
        id: 5,
        artist_id: 2,
        title: 'The Book That Can\'t Be Opened At Either End',
      }, {
        id: 6,
        artist_id: 2,
        title: 'No Heathen (Blacksmith Mix)',
      }, {
        id: 7,
        artist_id: 2,
        title: 'Osaka-Ku Memory Depot',
      }, {
        id: 8,
        artist_id: 2,
        title: 'Mole In The Ground',
      }, {
        id: 9,
        artist_id: 3,
        title: 'Sundown',
      }, {
        id: 10,
        artist_id: 3,
        title: 'Sounds of Symmetry',
      }, {
        id: 11,
        artist_id: 4,
        title: 'Indomitus',
      }, {
        id: 12,
        artist_id: 4,
        title: 'Sin',
      }]);
    });




};
