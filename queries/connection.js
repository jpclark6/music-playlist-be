const knexfile = require("../knexfile");
// const knex = require("knex")(knexfile[process.env.NODE_ENV]);
const environment = process.env.NODE_ENV || 'development'; 
const knex = require("knex")(knexfile[environment]);

module.exports = knex;
