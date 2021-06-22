var $ = function (id) {
    return document.getElementById(id); 
};
var processEntries = function () {
	// get user entries
	var subtotal = parseFloat( $("subtotal").value );
    var taxRate  = parseFloat( $("tax_rate").value );
    var isValid = true;
	
	// calculate and display results
	if ( isNaN(subtotal) || subtotal <=0 || subtotal >= 10000 ) {
        $("subtotal_message").firstChild.nodeValue = "Must be > 0 and < 10000";
        isValid = false;
	} 
	else {
		$("subtotal_message").firstChild.nodeValue = "";
	}
	if ( isNaN(taxRate) || taxRate <=0 || taxRate >= 12 ) {
        $("tax_rate_message").firstChild.nodeValue = "Must be > 0 and < 12";
        isValid = false;
	}
	else {
		$("tax_rate_message").firstChild.nodeValue = "";
	}
	if (isValid) {
		var salesTax = subtotal * (taxRate / 100);
		salesTax = parseFloat( salesTax.toFixed(2) );
		var total = subtotal + salesTax;
		
		// display results
	    $("sales_tax").value = salesTax;
	    $("total").value = total.toFixed(2);
	}
	    
    // move focus
    $("subtotal").focus();
};
var clearEntries = function () {
	// clear all text boxes
	$("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    
    // restore starting messages
	$("subtotal_message").firstChild.nodeValue = "Enter order subtotal";
	$("tax_rate_message").firstChild.nodeValue = "Enter sales tax rate (99.9)";
    
	// move focus
    $("subtotal").focus();
};
var clearSubtotal = function () {
	$("subtotal").value = "";
};
var clearRate = function () {
	$("tax_rate").value = "";
};
window.onload = function () {
	$("calculate").onclick = processEntries;
	$("clear").onclick = clearEntries;
	$("subtotal").onclick = clearSubtotal;
	$("tax_rate").onclick = clearRate;
	$("subtotal").focus();
};
