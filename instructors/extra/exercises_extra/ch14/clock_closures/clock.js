"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 

var displayCurrentTime = function() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
    $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
    $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

var tickStopwatch = function() {    
    // increment milliseconds by 10 milliseconds
    elapsed.milliseconds = elapsed.milliseconds + 10;

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsed.milliseconds === 1000) {
        elapsed.seconds++;
        elapsed.milliseconds = 0;
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsed.seconds === 60) {
        elapsed.minutes++;
        elapsed.seconds = 0;
    }

    //display new stopwatch time
    $("s_minutes").firstChild.nodeValue = padSingleDigit(elapsed.minutes);
    $("s_seconds").firstChild.nodeValue = padSingleDigit(elapsed.seconds);
    $("s_ms").firstChild.nodeValue = elapsed.milliseconds;
};

// event handler functions
var startStopwatch = function() {  
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    tickStopwatch();
    stopwatchTimer = setInterval(tickStopwatch, 10);
};

var stopStopwatch = function() {
    // stop timer
    clearInterval(stopwatchTimer);
};

var resetStopwatch = function() {
    // stop timer
    clearInterval(stopwatchTimer);
    
    // clear elapsed object and stopwatch display
    elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
    
    $("s_minutes").firstChild.nodeValue = "00";
    $("s_seconds").firstChild.nodeValue = "00";
    $("s_ms").firstChild.nodeValue = "000";
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
    $("start").onclick = startStopwatch;
    $("stop").onclick = stopStopwatch;
    $("reset").onclick = resetStopwatch;
};