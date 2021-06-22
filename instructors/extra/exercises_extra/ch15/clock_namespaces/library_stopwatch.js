"use strict";

var createStopwatch = function(displayTickCallbackFunction) {
    // private state
    var timer;
    var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
    
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

        // use callback to display new stopwatch time - pass it the elapsed time object
        if (displayTickCallbackFunction && typeof displayTickCallbackFunction === 'function') {
            displayTickCallbackFunction(elapsed); 
        }
    };
    
    // public methods
    return {
        start: function() {
            tickStopwatch();
            timer = setInterval(tickStopwatch, 10);
            return this;
        },
        stop: function() {
            clearInterval(timer);
            return this;
        },
        reset: function(resetStopwatchCallbackFunction) {
            clearInterval(timer);
            elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
            
            // use callback to reset stopwatch display
            if (resetStopwatchCallbackFunction && typeof resetStopwatchCallbackFunction === 'function') {
                resetStopwatchCallbackFunction();
            }
            return this;
        }
    };
};