'use strict';

var express = require('express');
var router = express.Router();
var knex = require('../knex');

router.get('/artists', (_req, res, next) => {
  knex('artists')
    .orderBy('id')
    .then((artists) => {
      res.send(artists);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/artists/:id', (req, res, next) => {
    knex('artists')
    .where('id', req.params.id)
    .first()
    .then((artists) => {
      if (!artists) {
        return next();
      }

      res.send(artists);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/artists', (req, res, next) => {
  knex('artists')
    .insert({ name: req.body.name }, '*')
    .then((artists) => {
      res.send(artists[0]);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
