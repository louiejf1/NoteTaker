//help direct dato to user 
const path = require("path");

//import data we want to use
const data = require("../db/db.json");



//export data
module.exports = function (app) {

  app.get("/api/data", function (req, res) {
    res.json(data);
  })

}