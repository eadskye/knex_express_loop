"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var artists = require('./routes/artists');
var tracks = require('./routes/tracks');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join('public')));

app.use(artists);
app.use(tracks);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen('3000', function(){
  console.log('Listening on port 3000');
})
