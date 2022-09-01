"use strict";

$(document).ready(function () {
  $("#newRoundBtn").on("click", function () {
    let correctGuess = Math.floor(Math.random() * 100) + 1;
    startNewRound(correctGuess);
  });
});

function startNewRound(correctGuess) {
  // make sure all the fields are cleared
  $("#messageDiv").html("");
  $("#playerGuess").html("");
}
