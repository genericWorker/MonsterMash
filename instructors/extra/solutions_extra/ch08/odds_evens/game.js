"use strict";
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};
var playGame = function() {
    var odd = 0;
    var even = 0;
    var player, computer, total;
    
    resetFields(); // clear any previous entries
    
    while (odd < 50 && even < 50) {
        // get player's "fingers"
        player = parseInt(prompt("Enter a number between 1 and 5, or 999 to quit", 999));
        if (player === 999) {
            resetFields();
            break; // end loop if player quits
        }
        if (!isNaN(player) && player <= 5) {
            // get computer's "fingers"
            computer = getRandomNumber(5);
            
            // show current round
            $("player").value = player;
            $("computer").value = computer;
            
            // update totals
            total = player + computer;
            if (total % 2 === 0) { 
                even = even + total; 
                $("even").value = even;
            } else { 
                odd = odd + total; 
                $("odd").value = odd;
            }
        }
    } 
    // after loop ends, determine winner
    if (odd >= 50) { $("message").firstChild.nodeValue = "You WIN!"; }
    else if (even >= 50) { $("message").firstChild.nodeValue = "You lose :("; }
    else { $("message").firstChild.nodeValue = "You quit"; }
    
    // set focus on button so can easily play again
    $("play").focus();
};

var resetFields = function() {
    $("player").value = "0";
    $("computer").value = "0";
    $("odd").value = "0";
    $("even").value = "0";
    $("message").firstChild.nodeValue = "";
};

window.onload = function() {
    $("play").onclick = playGame;
    $("play").focus();
};