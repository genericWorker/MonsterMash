"use strict";
var Task = function(task) {    
    this.text = task;
};
Task.prototype.isValid = function() {
    //if (this.text === "") { return false; } 
    //else { return true; }
    return !this.text.isBlank();
};
Task.prototype.toString = function() {
    // capitalize
    return this.text.capitalize();
};