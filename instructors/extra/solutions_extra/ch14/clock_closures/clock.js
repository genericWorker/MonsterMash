"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    // create clock and stopwatch objects
    var clock = createClock($("hours"), $("minutes"), $("seconds"), $("ampm"));
    var stopwatch = createStopwatch($("s_minutes"), $("s_seconds"), $("s_ms"));
    
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
        stopwatch.reset();
    };
};

