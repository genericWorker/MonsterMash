"use strict";

var createStopwatch = function(minuteSpan, secondSpan, msSpan) {
    // private state
    var timer;
    var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
    
    var padSingleDigit = function(num) {
        return (num < 10) ? "0" + num : num;
    };
    
    var tickStopwatch = function() {    
        // increment milliseconds by amount of interval
        elapsed.milliseconds = elapsed.milliseconds + 10;

        // roll over milliseconds to seconds, seconds to minutes
        if (elapsed.milliseconds === 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }
        if (elapsed.seconds === 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }

        //display new stopwatch time
        minuteSpan.firstChild.nodeValue = padSingleDigit(elapsed.minutes);
        secondSpan.firstChild.nodeValue = padSingleDigit(elapsed.seconds);
        msSpan.firstChild.nodeValue = elapsed.milliseconds;
    };
    
    // public methods
    return {
        // do first tick of stop watch and then set interval timer to tick 
        // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
        // variable so next two functions can stop timer.
        start: function() {
            tickStopwatch();
            timer = setInterval(tickStopwatch, 10);
            return this;
        },
        stop: function() {
            clearInterval(timer);
            return this;
        },
        reset: function() {
            clearInterval(timer);
            elapsed = { minutes:0, seconds:0, milliseconds:0 }; 

            minuteSpan.firstChild.nodeValue = "00";
            secondSpan.firstChild.nodeValue = "00";
            msSpan.firstChild.nodeValue = "000";
            return this;
        }
    };
};