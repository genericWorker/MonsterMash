var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
	var entry = $("cents").value;         // get user entry
    var cents = parseInt(entry);          // parse entry
	if (isNaN(cents) || cents < 0 || cents > 99) {
		alert("Entry must be greater than zero and less 100");
	}
	else {
		makeChange(cents);
	}
	$("cents").focus();
};

var makeChange = function(cents) {
	var quarters = parseInt(cents / 25);  // get number of quarters
	cents = cents % 25;                   // assign remainder to cents variable

	var dimes = parseInt(cents / 10);     // get number of dimes
	cents = cents % 10;                   // assign remainder to cents variable

	var nickels = parseInt(cents / 5);    // get number of nickels
	
	var pennies = cents % 5;              // get number of pennies
	
	// display the results of the calculations
	$("quarters").value = quarters;
	$("dimes").value = dimes;
	$("nickels").value = nickels;
	$("pennies").value = pennies;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
	$("cents").focus();
};