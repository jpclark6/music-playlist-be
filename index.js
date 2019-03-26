//Bring in express
const express = require("express");
// const path = require("path");

//Initialize express
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const environment = process.env.NODE_ENV || 'development';

//Init Middleware
// app.use(logger)

//Body Parse Middleware
// console.log(process.env.NODE_ENV);
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Set static folder
// app.use(express.static(path.join(__dirname, "public")));
app.use(cors())
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use("/api/v1/favorites", require("./routes/api/v1/favorites"));
app.use("/api/v1/favorites/:id", require("./routes/api/v1/individual"));
//When deployed the port number will be in an environment variable if not we set it to 5000.
const PORT = process.env.PORT || 5000;
//Runs the webserver
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = {
  app: app
}