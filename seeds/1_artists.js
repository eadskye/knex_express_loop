
'use strict';

exports.seed = function(knex) {
  return knex('artists').del()
    .then(() => {
      knex.raw("SELECT setval('artists_id_seq', (SELECT MAX(id) FROM artists))");
      return knex('artists').insert([{
        id: 1,
        name: 'Fatima al Qadiri',
        profile_url: 'https://cdn2-resources.ableton.com/loop.uploads/filer_public_thumbnails/filer_public/e8/57/e8573b23-0282-44ac-adfd-d8cbfc68b5a6/fatimaalqadiri_1000x1000.jpg__400x400_q85_crop_subsampling-2_upscale.jpg'
      }, {
        id: 2,
        name: 'Jace Clayton',
        profile_url: 'https://cdn2-resources.ableton.com/loop.uploads/filer_public_thumbnails/filer_public/98/35/98357c7b-13ce-4284-8aee-7f1c26f62e16/jace_clayton_506x506.jpg__400x400_q85_crop_subsampling-2_upscale.jpg'
      }, {
        id: 3,
        name: 'Daedelus',
        profile_url: 'https://cdn2-resources.ableton.com/loop.uploads/filer_public_thumbnails/filer_public/2e/45/2e451f05-52ef-4609-bb2d-267e777e5813/daedelus_1000x1000.jpg__400x400_q85_crop_subsampling-2_upscale.jpg'
      }, {
        id: 4,
        name: 'Demian Licht',
        profile_url: 'https://cdn2-resources.ableton.com/loop.uploads/filer_public_thumbnails/filer_public/ea/5b/ea5b0d02-7189-4ae6-9aa7-145097b05700/demian_licht_1000x1000.jpg__400x400_q85_crop_subsampling-2_upscale.jpg'
      }]);
    });


};
