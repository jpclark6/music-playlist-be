//Brings in express
const express = require("express");

const router = express.Router({mergeParams: true});
const getIndividual = require("../../../queries/favorites/getIndividual");
// Get All Favorites
router.get("/", (req, res) => getIndividual(req.params.id).then(rows =>{
  if(rows.length < 1){
    res.status(404).json({"status": "404"});
  }else{
    res.json(rows);
  }}));

module.exports = router;
