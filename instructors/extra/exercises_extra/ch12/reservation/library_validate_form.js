"use strict";
var RegisterForm = function() { };
RegisterForm.prototype = new Validate(); //inherit

// Method to validate individual field
RegisterForm.prototype.validateField = function(fieldName, text) {
    var field = fields[fieldName];
    // add code to test various fields and throw error if test fails
    if (field.required) {}
    if (field.isNumber) {}
    if (field.isDate) {}
    if (field.isEmail) {}
    if (field.isPhone) {}
};

// Error message methods
RegisterForm.prototype.setError = function( fieldName, message ) {
    $(fieldName + "_error").setAttribute("class", "error");
    $(fieldName + "_error").firstChild.nodeValue = message;
};
RegisterForm.prototype.clearError = function( fieldName, message ) {
    $(fieldName + "_error").setAttribute("class", "");
    $(fieldName + "_error").firstChild.nodeValue = message || "";
};

// Form methods
RegisterForm.prototype.resetForm = function() {
    for ( var fieldName in fields ) {
        this.clearError(fieldName, fields[fieldName].message);
        $(fieldName).value = ""; //clear corresponding textbox 
    }
};
RegisterForm.prototype.validateForm = function() {
    var isOK = true;
    for ( var fieldName in fields ) {
        this.clearError(fieldName);
        // add try/catch block to validate field 
       
    }
    return isOK;
};