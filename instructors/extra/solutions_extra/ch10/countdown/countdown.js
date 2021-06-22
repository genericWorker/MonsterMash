"use strict";
var $ = function(id) { return document.getElementById(id); };

var calculateDays = function() {  
    var event = $("event").value;
    var dt = $("date").value;  
    var message = $("message").firstChild; 
    var date, days;
    
    // clear previous message
    clearMessage(message);
    
    //make sure task and due date are entered and date is valid
    if (isValidEntry(event, dt, message)) {
        date = checkDate(dt, message);
    }  
    
    // if no error messages, calculate and display days until event
    if (hasNoError(message)) {
        days = getDays(date);
        displayDays(event, days, message);
    }
};

window.onload = function() {
    $("countdown").onclick = calculateDays;
    $("event").focus();
};