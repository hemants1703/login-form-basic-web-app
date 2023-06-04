const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

var fName = "";
var lName = "";
var pNumber = "";
var Email = "";

app.get("/", (req, res) => {

    var inputDetails = {
        firstName: fName,
        lastName: lName,
        phoneNumber: pNumber,
        email: Email
    };

    res.render("index", inputDetails);
});

app.post("/", (req, res) => {
    console.log(req.body);
    fName = req.body.firstName;
    lName = req.body.lastName;
    pNumber = req.body.phoneNumber;
    Email = req.body.email;
    res.redirect("/");
});

app.listen(port, () => console.log(`Express server listening on port http://localhost:${port}/`));