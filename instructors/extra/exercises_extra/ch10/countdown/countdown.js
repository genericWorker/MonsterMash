"use strict";
var $ = function(id) { return document.getElementById(id); };

var calculateDays = function() {  
    var event = $("event").value;
    var dt = $("date").value;  
    var message = $("message").firstChild;  
    var date, days, today, oneDay;
    
    // clear previous message
    message.nodeValue = " ";
    
    //make sure task and due date are entered and correct
    if (event.length === 0 || dt.length === 0) {
        message.nodeValue = "Please enter both a name and a date.";
    } else {
        //make sure due date string has slashes and a 4-digit year
        if (dt.indexOf("/") === -1) { 
            message.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        } 
        var year = dt.substring(dt.length - 4); 
        if (isNaN(year)) {
            message.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        }     
        //convert due date string to Date object and make sure date is valid
        date = new Date(dt);
        if (date === "Invalid Date") {
            message.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        }
    }  
    
    // if no error messages, calculate and display days until event
    if (message.nodeValue === " ") {

        //calculate days
        today = new Date();
        oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
        days = ( date.getTime() - today.getTime() ) / oneDay;
        days = Math.ceil(days);

        //create and display message 
        if (days === 0) {
            message.nodeValue = "Hooray! Today is " + event + "!";
        }
        if (days < 0) {
            event = event.substring(0,1).toUpperCase() + event.substring(1); // capitalize event
            message.nodeValue = event + " happened " + Math.abs(days) + " day(s) ago.";        
        }
        if (days > 0) {
            message.nodeValue = days + " day(s) until " + event + "!";
        }
    }
};

window.onload = function() {
    $("countdown").onclick = calculateDays;
    $("event").focus();
};