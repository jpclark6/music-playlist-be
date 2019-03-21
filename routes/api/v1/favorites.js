//Brings in express
const express = require("express");

const router = express.Router();
const getAllFavorites = require("../../../queries/favorites/getAll");
const postIndividual = require("../../../queries/favorites/postIndividual");
// const getAllFavorites = require("queries/favorites/getAll");
// Get All Favorites
router.get("/", (req, res) => getAllFavorites().then(rows => res.json(rows)));
router.post("/", (req, res) => {
  postIndividual(req.body)
    .then(reply => res.json(reply));
});

module.exports = router;
