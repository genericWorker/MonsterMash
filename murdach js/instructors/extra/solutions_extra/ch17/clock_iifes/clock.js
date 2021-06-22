"use strict";

$(document).ready( () => {
    // start clock
    clock.start( $("#hours"), $("#minutes"), $("#seconds"), $("#ampm") );

    // set up stopwatch event handlers
    $("#start").click( () => stopwatch.start( $("#s_minutes"), $("#s_seconds"), $("#s_ms") ) );
    $("#stop").click( () => stopwatch.stop() );
    $("#reset").click( () => stopwatch.reset() ); 
}); 