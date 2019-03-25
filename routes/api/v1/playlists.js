const express = require("express");
const router = express.Router();

const getAllPlaylists = require("../../../queries/playlists/getAll");


router.get("/", (req, res) => getAllPlaylists().then(rows => res.json(rows)));

module.exports = router;