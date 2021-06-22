"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var processEntry = function() {
	var income = parseFloat( $("income").value );
	if (isNaN(income) || income <=0) { 
		alert("Income must be a valid number greater than zero"); 
	}
	else {
		$("tax").value = calculateTax(income);
	}
};

var calculateTax = function(income) {
	var tax;
	if (income <= 9225) {
		tax = parseInt(income * .10); 
	}
	else if (income > 9225 && income <= 37450) { 
		tax = 922.5 + parseInt((income - 9225) * .15);
	}	
	else if (income > 37450 && income <= 90750) {
		tax = 5156.25 + parseInt((income - 37450) * .25);
	}
	else if (income > 90750 && income <= 189300) {
		tax = 18481.25 + parseInt((income - 90750) * .28);
	}
	else if (income > 189300 && income <= 411500) {
		tax = 46075.25 + parseInt((income - 189300) * .33);
	}
	else if (income > 411500) {
		tax = 119401.25 + parseInt((income - 411500) * .35);
	}
	else if (income > 413200) {
		tax = 119996.25 + parseInt((income - 411500) * .396);
	}
	tax.toFixed(2);
	return tax;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
};