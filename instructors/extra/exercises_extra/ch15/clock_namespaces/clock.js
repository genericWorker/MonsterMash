"use strict";
var $ = function(id) { return document.getElementById(id); };

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

// callback function for displaying clock time 
var displayTime = function(now) {
    $("hours").firstChild.nodeValue = now.hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(now.minutes);
    $("seconds").firstChild.nodeValue = padSingleDigit(now.seconds);
    $("ampm").firstChild.nodeValue = now.ampm;

    // display date in "m/d/yyyy" format - correct for zero-based month
    var date = (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear();
    $("date").firstChild.nodeValue = date;
};
// callback function for displaying stopwatch elapsed time 
var displayTick = function(elapsed) {
    $("s_minutes").firstChild.nodeValue = padSingleDigit(elapsed.minutes);
    $("s_seconds").firstChild.nodeValue = padSingleDigit(elapsed.seconds);
    $("s_ms").firstChild.nodeValue = elapsed.milliseconds;
};
// callback function for clearing stopwatch elapsed time display
var resetStopwatch = function() {
    $("s_minutes").firstChild.nodeValue = "00";
    $("s_seconds").firstChild.nodeValue = "00";
    $("s_ms").firstChild.nodeValue = "000";
};

// onload event handler
window.onload = function() {
    var clock = createClock(displayTime);
    var stopwatch = createStopwatch(displayTick);
    
    // start clock
    clock.start();

    // set up stopwatch event handlers
    $("start").onclick = function() {
        stopwatch.start();
    };
    $("stop").onclick = function() {
        stopwatch.stop();
    };
    $("reset").onclick = function() {
        stopwatch.reset(resetStopwatch);
    };
};    
