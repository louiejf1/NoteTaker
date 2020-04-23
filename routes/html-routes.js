//help direct routes from user to server
const path = require("path");

module.exports = function (app) { // function to use data listed in other files


    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/notes.html"))
    });

    //send all request to home by changing get to use and remove root "/location"
    app.use( function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"))
    //change html link to show /tables, /Reserations
    });
}
