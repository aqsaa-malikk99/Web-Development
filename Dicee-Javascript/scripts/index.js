function rollDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1);
    return randomNumber1;
}

function getResults(dice1, dice2) {
    if (dice1 > dice2) {
        document.querySelector("h1").textContent = "Player 1 wins!";

    }
    else if (dice1 == dice2) {
        document.querySelector("h1").textContent = "Draw!";

    }
    else {
        document.querySelector("h1").textContent = "Player 2 wins!";
    }
}

var dice1 = rollDice();
var imageName1 = "images\\dice" + dice1 + ".png";
document.querySelector(".img1").setAttribute("src", imageName1);
var dice2 = rollDice();
var imageName2 = "images\\dice" + dice2 + ".png";
document.querySelector(".img2").setAttribute("src", imageName2);
getResults(dice1, dice2);