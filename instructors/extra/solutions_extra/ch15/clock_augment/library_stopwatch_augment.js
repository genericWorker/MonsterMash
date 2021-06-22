"use strict";
(function(stopwatch) {
    stopwatch.getElapsedTimeWithHours = function() {
        // get stopwatch elapsed time object and add an hours property
        var elapsed = stopwatch.elapsedTime;
        elapsed.hours = 0; 
        
        // calculate hours and adjust minutes
        if (elapsed.minutes >= 60) {
            elapsed.hours = Math.floor(elapsed.minutes / 60);
            elapsed.minutes = elapsed.minutes % 60;
        }
        return elapsed;
    };
})(myapp.time.stopwatch); // import the module to be augmented
