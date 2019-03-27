const express = require("express");
const router = express.Router();

const getAllPlaylists = require("../../../queries/playlists/getAll");
const postIndividual = require("../../../queries/playlists/postIndividual");
const postSongs = require("../../../queries/playlists/postSongs");
const postFavoriteToPlaylist = require("../../../queries/playlists/postFavoriteToPlaylist");


function getBodyParams(req) {
  return {
    playlist_name: req.body.playlist_name,
  };
}

function getBodyID(req) {
  return {
    playlist_id: req.body.playlist_id,
    favorite_id: req.body.favorite_id
  };
}

router.get("/", (req, res) => getAllPlaylists().then(rows => res.json(rows)));
router.post("/", (req, res) => {
  return postIndividual(getBodyParams(req)).then(reply => res.json(reply));
});
router.post("/:id", (req, res) => {
  return postSongs(getBodyID(req)).then(reply => res.json(reply));
});
router.post("/:id/favorites", (req, res) => {
  return postFavoriteToPlaylist(getBodyID(req)).then(reply =>
    res.json(reply)
  );
});

module.exports = router;