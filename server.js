const bodyParser = require('body-parser'); //body parser
const express = require('express'); //Express for server
const app = express(); // assign expresss to app var
const path = require("path");// assign path to var

let port = process.env.PORT || "8080"; //post defined by server or 5000

// app.get('/', function (req, res) {
//     res.send('got it working now...')
// })

//body parser code helps receive info back in JSON - https://www.npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// add routes from json bd file
require("./routes/api-routes") (app);

// add routes from html bd file
require("./routes/html-routes") (app);


app.listen(port, function () {
    console.log(`server started on HTTP://localhost:${port}`);
})
