const $ = selector => document.querySelector(selector);

const processEntries = () => {
	// get user entries
	const subtotal = parseFloat( $("#subtotal").value );
    const taxRate  = parseFloat( $("#tax_rate").value );
    let isValid = true;
	
	// calculate and display results
	if ( isNaN(subtotal) || subtotal <=0 || subtotal >= 10000 ) {
		alert("Subtotal must be > 0 and < 10000");
	} 
	else if ( isNaN(taxRate) || taxRate <=0 || taxRate >= 12 ) {
        alert("Tax Rate Must be > 0 and < 12");
	}
	else {
		let salesTax = subtotal * (taxRate / 100);
		salesTax = parseFloat( salesTax.toFixed(2) );
		const total = subtotal + salesTax;
		
		// display results
	    $("#sales_tax").value = salesTax;
	    $("#total").value = total.toFixed(2);
	}
	    
    // move focus
    $("#subtotal").focus();
};

const clearSubtotal = () => $("#subtotal").value = "";

const clearRate = () => $("#tax_rate").value = "";

const clearEntries = () => {
	// clear all text boxes
	clearSubtotal();
    clearRate();
    $("#sales_tax").value = "";
    $("#total").value = "";
    
	// move focus
    $("#subtotal").focus();
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntries);
	$("#clear").addEventListener("click", clearEntries);
	$("#subtotal").addEventListener("click", clearSubtotal);
	$("#tax_rate").addEventListener("click", clearRate);

	// move focus
	$("#subtotal").focus();
});