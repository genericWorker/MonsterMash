"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {

};

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
};