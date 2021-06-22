"use strict";
var $ = function(id) { return document.getElementById(id); };
var frm;

var saveReservation = function() {
    sessionStorage.arrivalDate = $("arrival_date").value;
    sessionStorage.nights = $("nights").value;
    sessionStorage.adults = $("adults").value;
    sessionStorage.children = $("children").value;
    
    sessionStorage.roomType = $("standard").value; // default value
    if ($("business").checked) {
        sessionStorage.roomType = $("business").value;
    }
    if ($("suite").checked) {
        sessionStorage.roomType = $("suite").value;
    }
    
    sessionStorage.bedType = $("king").value; //default value
    if ($("double").checked) {
        sessionStorage.bedType = $("double").value;
    }
    
    if ($("smoking").checked) {
        sessionStorage.smoking = "yes";
    } else {
        sessionStorage.smoking = "no";
    }

    sessionStorage.name = $("name").value;				
    sessionStorage.email = $("email").value;
    sessionStorage.phone = $("phone").value;
    
    // submit form
    $("reservation_form").submit();
};

var clearForm = function() {
    frm.resetForm();
    $("arrival_date").focus();
};

window.onload = function() {
    frm = new RegisterForm();
    frm.resetForm();
    
    $("submit_request").onclick = saveReservation;
    $("clear").onclick = clearForm;
    $("arrival_date").focus();
};