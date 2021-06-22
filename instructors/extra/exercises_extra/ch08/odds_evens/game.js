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