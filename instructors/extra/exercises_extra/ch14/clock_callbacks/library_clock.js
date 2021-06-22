"use strict";

var createClock = function(displayTimeCallbackFunction) {
    // private state
    var displayCurrentTime = function() {
        var now = new Date();
        
        // add own properties to instance of Date object
        now.hours = now.getHours();
        now.minutes = now.getMinutes();
        now.seconds = now.getSeconds();
        now.ampm = "AM"; // set default value

        // correct hours and AM/PM value for display
        if (now.hours > 12) { // convert from military time
            now.hours = now.hours - 12;
            now.ampm = "PM";
        } else { // adjust 12 noon and 12 midnight
             switch (now.hours) {
                case 12: // noon
                    now.ampm = "PM";
                    break;
                case 0:  // midnight
                    now.hours = 12;
                    now.ampm = "AM";
            }
        }
        // use callback function to display time - pass it the now variable
    };
    
    // public methods
    return {
        start: function() {
            displayCurrentTime();
            setInterval(displayCurrentTime, 1000);
            return this;
        }
    };
};