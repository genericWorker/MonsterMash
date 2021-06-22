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

var generatePassword = function() {
    $("password").value = ""; // clear previous entry
    
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
    var password = "";
    var start, stop, char;
    
    // get password length entered by user
    var num = parseInt($("num").value);

    // validate length
    if (isNaN(num)) {
        alert("Please enter a valid number");
    } else {
        // loop number of times entered by user - on each iteration...
        for (var i = 0; i < num; i++) {
            // get a random character from the chars string
            start = getRandomNumber(chars.length);
            stop = start + 1;
            char = chars.substring(start, stop);
            
            // add the random character to the password string
            password = password += char;
        }
        // display the password string when the loop is done
        $("password").value = password;
    }
};

var clearFields = function() {
    $("num").value = "";
    $("password").value = "";
    $("num").focus();
};

window.onload = function() {
    $("generate").onclick = generatePassword;
    $("clear").onclick = clearFields;
    $("num").focus();
};