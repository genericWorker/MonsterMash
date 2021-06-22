const $ = selector => document.querySelector(selector);

const makeChange = cents => {
	const quarters = parseInt(cents / 25);  // get number of quarters
	cents = cents % 25;                     // assign remainder to cents variable

	const dimes = parseInt(cents / 10);     // get number of dimes
	cents = cents % 10;                     // assign remainder to cents variable

	const nickels = parseInt(cents / 5);    // get number of nickels
	
	const pennies = cents % 5;              // get number of pennies
	
	// display the results of the calculations
	$("#quarters").value = quarters;
	$("#dimes").value = dimes;
	$("#nickels").value = nickels;
	$("#pennies").value = pennies;
};

const processEntry = () => {
	let cents = parseInt( $("#cents").value );     // get user entry

	if (isNaN(cents) || cents < 0 || cents > 99) {
		alert("Entry must be greater than zero and less 100");
	}
	else {
		makeChange(cents);
	}

	$("#cents").focus();
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").onclick = processEntry;
	
	// move focus
	$("#cents").focus();
});