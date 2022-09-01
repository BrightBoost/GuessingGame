"use strict";

$(document).ready(function(){
  $("#newRoundBtn").on("click", startNewRound);
});

function startNewRound() {
  // make sure all the fields are cleared
  $("#messageDiv").html("");
  $("#playerGuess").html("");
}