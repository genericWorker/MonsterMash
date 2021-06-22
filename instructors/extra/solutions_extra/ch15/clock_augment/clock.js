"use strict";
(function() {
    // aliases
    var t = myapp.time;
    var u = myapp.utility;

    // callback function for displaying clock time 
    var displayTime = function(now) {
        u.$("hours").firstChild.nodeValue = now.hours;
        u.$("minutes").firstChild.nodeValue = u.padSingleDigit(now.minutes);
        u.$("seconds").firstChild.nodeValue = u.padSingleDigit(now.seconds);
        u.$("ampm").firstChild.nodeValue = now.ampm;
        
        var date = (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear();
        u.$("date").firstChild.nodeValue = date;
    };
    // callback function for displaying stopwatch elapsed time 
    var displayTick = function(elapsed) { 
        // update elapsed variable to use version that includes hours
        elapsed = t.stopwatch.getElapsedTimeWithHours();
        u.$("s_hours").firstChild.nodeValue = u.padSingleDigit(elapsed.hours);
        u.$("s_minutes").firstChild.nodeValue = u.padSingleDigit(elapsed.minutes);
        u.$("s_seconds").firstChild.nodeValue = u.padSingleDigit(elapsed.seconds);
        u.$("s_ms").firstChild.nodeValue = elapsed.milliseconds;
    };
    // callback function for clearing stopwatch elapsed time display
    var resetStopwatch = function() {
        u.$("s_hours").firstChild.nodeValue = "00";
        u.$("s_minutes").firstChild.nodeValue = "00";
        u.$("s_seconds").firstChild.nodeValue = "00";
        u.$("s_ms").firstChild.nodeValue = "000";
    };

    // onload event handler
    window.onload = function() {
        // start clock
        t.clock.start(displayTime);

        // set up stopwatch event handlers
        u.$("start").onclick = function() {
            t.stopwatch.start(displayTick);
        };
        u.$("stop").onclick = function() {
            t.stopwatch.stop();
        };
        u.$("reset").onclick = function() {
            t.stopwatch.reset(resetStopwatch);
        };
    };    
})();
