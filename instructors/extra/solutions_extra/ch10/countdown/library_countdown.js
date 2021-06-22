"use strict";

var clearMessage = function(messageNode) {
    messageNode.nodeValue = " ";
};

var isValidEntry = function(event, dt, messageNode) {
    if (event.length === 0 || dt.length === 0) {
        messageNode.nodeValue = "Please enter both a name and a date.";
        return false;
    } else { return true; }
};

var checkDate = function (dt, messageNode) {
    //make sure due date string has slashes and a 4-digit year
    if (dt.indexOf("/") === -1) { 
        messageNode.nodeValue = "Please enter the date in MM/DD/YYYY format.";
    } 
    var year = dt.substring(dt.length - 4); 
    if (isNaN(year)) {
        messageNode.nodeValue = "Please enter the date in MM/DD/YYYY format.";
    }     
    //convert due date string to Date object and make sure date is valid
    var date = new Date(dt);
    if (date === "Invalid Date") {
        messageNode.nodeValue = "Please enter the date in MM/DD/YYYY format.";
    }
    return date;
};

var hasNoError = function(messageNode) {
    return (messageNode.nodeValue === " ") ? true: false;
};

var getDays = function(date) {
    var today = new Date();
    var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
    var days = ( date.getTime() - today.getTime() ) / oneDay;
    return Math.ceil(days);
};

var displayDays = function(event, days, messageNode) {
    //create and display message 
    if (days === 0) {
        messageNode.nodeValue = "Hooray! Today is " + event + "!";
    }
    if (days < 0) {
        event = event.substring(0,1).toUpperCase() + event.substring(1); // capitalize event
        messageNode.nodeValue = event + " happened " + Math.abs(days) + " day(s) ago."; 
    }
    if (days > 0) {
        messageNode.nodeValue = days + " day(s) until " + event + "!";
    }
};