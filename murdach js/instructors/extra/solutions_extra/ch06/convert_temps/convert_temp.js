"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
    // update labels and clear disabled textbox
    $("#degree_label_1").textContent = label1Text;
    $("#degree_label_2").textContent = label2Text;
    $("#degrees_computed").value = "";

    // select text in degrees textbox
	$("#degrees_entered").select();
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {   
    // get user entry
    const temp = parseFloat( $("#degrees_entered").value );

    if (isNaN(temp)) { 
        // notify user of error, clear previously computed value, and select text in degrees textbox
        $("#message").textContent = "You must enter a valid number for degrees."; 
        $("degrees_computed").value = "";
        $("#degrees_entered").select();                 
    }
    else {
        // clear any previous error message
        $("#message").textContent = "";  

        // compute and display temp based on which radio button is checked
        if ( $("#to_celsius").checked ) {  
            $("#degrees_computed").value = calculateCelsius(temp).toFixed(0);
        } else {
            $("#degrees_computed").value = calculateFahrenheit(temp).toFixed(0);
        }  
        
        // select text in degrees textbox
	    $("#degrees_entered").select();
    }
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});