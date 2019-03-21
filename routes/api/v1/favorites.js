//Brings in express
const express = require("express");

const router = express.Router();
const getAllFavorites = require("queries/favorites/getAll");
// Get All Favorites
router.get("/", (req, res) => getAllFavorites().then(rows => res.json(rows)));

module.exports = router;
