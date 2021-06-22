"use strict";

const $ = selector => document.querySelector(selector);

const calculateTax = income => {
	let tax = 0;

	if (income <= 9875) {
		tax = income * .10; 
	}
	else if (income > 9875 && income <= 40125) { 
		tax = 987.50 + (income - 9875) * .12;
	}	
	else if (income > 40125 && income <= 85525) {
		tax = 4617.50 + (income - 40125) * .22;
	}
	else if (income > 85525 && income <= 163300) {
		tax = 14605.50 + (income - 85525) * .24;
	}
	else if (income > 163300 && income <= 207350) {
		tax = 33271.50 + (income - 163300) * .32;
	}
	else if (income > 207350 && income <= 518400) {
		tax = 47367.50 + (income - 207350) * .35;
	}
	else if (income > 518400) {
		tax = 156235.00 + (income - 518400) * .37;
	}
	
	return tax.toFixed(2);
};

const processEntry = () => {
	let income = parseFloat( $("#income").value );

	if (isNaN(income) || income <=0) { 
		alert("Income must be a valid number greater than zero"); 
	}
	else {
		income = parseInt(income);
		$("#tax").value = calculateTax(income);
	}

	$("#income").focus();
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

	// move focus
	$("#income").focus();
});