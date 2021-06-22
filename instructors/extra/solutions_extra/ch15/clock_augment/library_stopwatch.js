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
    
    var stopwatch = {
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
            
            // don't need to store callback because it's only used once - call it now
            if (callback && typeof callback === 'function') {
                callback();
            }
            return this;
        }
    };
    
    // add a read-only property that returns an object that contains values of
    // the private elapsed time object. Don't return the elapsed time object 
    // itself, because it would be returned by reference and thus its properties 
    // could be changed, which would affect the internal count of the stopwatch.
    Object.defineProperty(stopwatch, "elapsedTime", {
        get: function() {
            return {
                minutes: elapsed.minutes,
                seconds: elapsed.seconds,
                milliseconds: elapsed.milliseconds
            };
        }
    });
    
    return stopwatch;
})();