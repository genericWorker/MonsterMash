"use strict";

const stopwatch = ( () => {
    let timer = null;
    const increment = 10;
    let elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
    const spans = { minute: null, second: null, millisecond: null };

    const padSingleDigit = num => num.toString().padStart(2, "0");
    
    const tickStopwatch = () => {    
        // increment milliseconds by amount of interval
        elapsed.milliseconds = elapsed.milliseconds + increment;

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
        spans.minute.text( padSingleDigit(elapsed.minutes) );
        spans.second.text( padSingleDigit(elapsed.seconds) );
        spans.milliseconds.text( elapsed.milliseconds );
    };
    
    // public methods
    return {
        start(minuteSpan, secondSpan, msSpan) {
            // store span elements
            spans.minute = minuteSpan;
            spans.second = secondSpan;
            spans.milliseconds = msSpan;
            
            // do first tick of stop watch and then set interval timer to tick 
            // stop watch at set interval. Store timer object in stopwatchTimer 
            // variable so next two functions can stop timer.
            tickStopwatch();
            timer = setInterval(tickStopwatch, increment);
            return this;
        },
        stop() {
            clearInterval(timer);
            return this;
        },
        reset() {
            clearInterval(timer);
            elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
            
            spans.minute.text( "00" );
            spans.second.text( "00" );
            spans.milliseconds.text( "000" );
            return this;
        }
    };

})(); // Invoke IIFE