"use strict";
var $ = function(id) { return document.getElementById(id); };

var convertTemp = function() {
    var f, c;       
    if ( $("to_celsius").checked ) {    
        f = parseFloat( $("degrees_entered").value );
        if (isNaN(f)) { 
            alert("You must enter a valid number for degrees.");                    
        }
		else {
        	c = (f-32) * 5/9;
	        $("degrees_computed").value = c.toFixed(0);
		}
    }
    else {
        c = parseFloat( $("degrees_entered").value );   
        if (isNaN(c)) { 
            alert("You must enter a valid number for degrees.");
        }
		else {
			f = c * 9/5 + 32;
	        $("degrees_computed").value = f.toFixed(0);
		}
    }
};
var toCelsius = function() {
    $("degree_label_1").firstChild.nodeValue = "Enter F degrees:";
    $("degree_label_2").firstChild.nodeValue = "Degrees Celsius:";
    clearTextBoxes();
	$("degrees_entered").focus();
};

var toFahrenheit = function() {
    $("degree_label_1").firstChild.nodeValue = "Enter C degrees:";
    $("degree_label_2").firstChild.nodeValue = "Degrees Fahrenheit:";
    clearTextBoxes();
	$("degrees_entered").focus();
};

var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};