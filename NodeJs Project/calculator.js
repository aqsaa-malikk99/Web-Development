const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");

});

app.get("/bmicalculator", function (request, response) {
    response.sendFile(__dirname + "/bmi-calculator.html");

});

app.post("/bmicalculator", function (request, response) {
    console.log(request.body);
    var num1 = parseFloat(request.body.weight);
    var num2 = parseFloat(request.body.height);
    var bmi = num1 / (num2 * num2);
    response.send("Your BMI is" + bmi);
});
app.listen(3000, function () {

    console.log("Server started on port 3000");

});