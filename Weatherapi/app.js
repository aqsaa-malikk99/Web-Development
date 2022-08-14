const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");

});

app.post("/", function (req, res) {

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    console.log("firstName is " + firstName + " last name is " + lastName + " email is " + email);
});

app.listen(3000, function () {

    console.log("The server is running")
});

