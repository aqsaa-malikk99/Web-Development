
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var started = false;
var userClickedPattern = [];
var level = 0;



$(document).keypress(function (e) {
  if (!started) {


    nextSequence();

  }


});

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);


});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }

}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber1 = Math.floor(Math.random() * 4) + 0;


  var randomChosenColour = buttonColours[randomNumber1];

  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);


}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function checkUserChosenColour(event) {
  var userChosenColor = event.id;
}