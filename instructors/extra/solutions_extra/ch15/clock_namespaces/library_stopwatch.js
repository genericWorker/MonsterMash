"use strict";

myapp.time.stopwatch = (function() {
    // private state
    var timer;
    var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
    var displayTickCallbackFunction;
    
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

        // use callback to display new stopwatch time
        if (displayTickCallbackFunction && typeof displayTickCallbackFunction === 'function') {
            displayTickCallbackFunction(elapsed);
        }
    };
    
    // public methods
    return {
        start: function(callback) {
            displayTickCallbackFunction = callback; // store callback for later use by timer
            tickStopwatch();
            timer = setInterval(tickStopwatch, 10);
            return this;
        },
        stop: function() {
            clearInterval(timer);
            return this;
        },
        setMinutes: function(min) {
            if (!isNaN(min)) {
                if (min >= 0 && min <= 60) {
                    elapsed.minutes = min;
                }
            } 
            return this;
        },
        reset: function(callback) {
            clearInterval(timer);
            elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
            
            // use callback to reset stopwatch display
            if (callback && typeof callback === 'function') {
                callback();
            }
            return this;
        }
    };
})();