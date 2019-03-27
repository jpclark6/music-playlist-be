//Brings in express
const express = require("express");

const router = express.Router();
const getAllFavorites = require("../../../queries/favorites/getAll");
const postIndividual = require("../../../queries/favorites/postIndividual");
const edit = require("../../../queries/favorites/edit");
const deleteSong = require("../../../queries/favorites/delete");

function getBodyParams(req) {
  return {
    name: req.body.name,
    artist_name: req.body.artist_name,
    genre: req.body.genre,
    rating: req.body.rating
  };
}
// const getAllFavorites = require("queries/favorites/getAll");
// Get All Favorites
router.get("/", (req, res) => getAllFavorites().then(rows => res.json(rows)));
router.post("/", (req, res) => {
  return postIndividual(getBodyParams(req)).then(reply => res.json(reply));
});
router.patch("/:id", (req, res) => {
  // checkout eslint
  return edit(req.params.id, getBodyParams(req))
    .then(reply => {
      if (reply === 0) {
        res.status(400);
        return res.json({ message: "record not found" });
      }
      return res.json({ message: "record successfully updated" });
    })
    .catch(e => {
      res.status(400);
      return res.json({ message: "invalid request" });
    });
});

router.delete("/:id", (req, res) => {
  deleteSong(req.params.id).then(reply => {
    res.status(204);
    return res.json({ message: "record deleted" });
  });
});

module.exports = router;
