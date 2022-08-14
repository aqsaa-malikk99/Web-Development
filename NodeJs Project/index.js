const express = require("express");
const { appendFile } = require("fs");
const superheroes = require("superheroes");
const supervillains = require('supervillains');
const app = express();

var mySuperheroName = superheroes.random();

var mysuperVillians = supervillains.random();

app.get("/", function (request, response) {
    console.log(request);
    response.send(mySuperheroName + "is my superhero fighting aganist " + mysuperVillians);
});

console.log(mysuperVillians);
console.log(mySuperheroName);

app.listen(3000, function () {

    console.log("Server started on port 3000");

});