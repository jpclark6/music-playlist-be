//Brings in express
const express = require("express");

const router = express.Router();
const getAllFavorites = require("../../../queries/favorites/getAll");
const postIndividual = require("../../../queries/favorites/postIndividual");
const edit = require("../../../queries/favorites/edit");
// const getAllFavorites = require("queries/favorites/getAll");
// Get All Favorites
router.get("/", (req, res) => getAllFavorites().then(rows => res.json(rows)));
router.post("/", (req, res) => {
  postIndividual(req.body).then(reply => res.json(reply));
});
router.put("/:id", (req, res) => {
  const updateAttributes = {
    name: req.body.name,
    artist_name: req.body.artist_name,
    genre: req.body.genre,
    rating: req.body.rating
  };

  // checkout eslint
  return edit(req.params.id, updateAttributes)
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

module.exports = router;
