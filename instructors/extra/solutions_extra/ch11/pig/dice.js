"use strict";
var $ = function(id) { return document.getElementById(id); };

var newGame = function() {
    game.clearScores().setInitialPlayer();
    if (game.isValid()) {
        $("turn").setAttribute("class", "open");
        $("roll").focus();
    } else {
        $("turn").removeAttribute("class");
        alert("Please enter two player names.");
        $("player1").focus();
    }
};
var takeTurn = function() {
    game.takeTurn().changePlayer();
    $("roll").focus();
    
};
var holdTurn = function() {
    var winner = game.hold().changePlayer().checkWinner();
    if (winner === "none") {    
        $("roll").focus();
    } else {
        alert(winner + " WINS!");
        newGame();
    }
};
window.onload = function() {
    $("new_game").onclick = newGame;
    $("roll").onclick = takeTurn;
    $("hold").onclick = holdTurn;
    $("player1").focus();
    
    // call the load method and pass it the page elements the game object needs
    game.load($("player1"), $("player2"), $("score1"), $("score2"), $("current"), $("die"), $("total"));
};