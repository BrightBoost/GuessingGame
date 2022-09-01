"use strict";

let correctGuess;
$(document).ready(function () {
  $("#newRoundBtn").on("click", function () {
    correctGuess = Math.floor(Math.random() * 100) + 1;
    startNewRound(correctGuess);
    $("#startGameDiv").hide();
    $("#guessForm, #prevGuessTable").show();
  });

  $("#guessForm, #prevGuessTable").hide();

  $("#guessForm").on("submit", onGuessSubmit);
  $("#showHint").on("click", onShowHint);
});

function startNewRound(correctGuess) {
  $("#guess").text("25");
  // make sure all the fields are cleared
  $("#messageDiv").html("");
  $("#playerGuess").val("");
  $("#submitGuess").attr("disabled", false);
}

function onGuessSubmit() {
  //update remaining guesses
  let remainingGuesses = $("#guess");
  remainingGuesses.text(parseInt(remainingGuesses.text()) - 1);
  if (parseInt(remainingGuesses.text()) == 0) {
    alert("You're out of guesses");
    endRound();
  }

  //evaluate nr
  let numberGuess = $("#playerGuess").val();
  if (numberGuess == correctGuess) {
    $("#messageDiv").html("correct number!");
    $("#startGameDiv").show();
    $("#submitGuess").attr("disabled", true);
  } else if (numberGuess < correctGuess) {
    $("#messageDiv").html("guess higher");
  } else if (numberGuess > correctGuess) {
    $("#messageDiv").html("guess lower");
  }
  return false;
}

function endRound() {
  $("#guess, #playerGuess, #messageDiv").html("");
  $("#startGameDiv").show();
}

function onShowHint() {
  alert(`The answer is between ${correctGuess - 10} and ${correctGuess + 10}`);
}
