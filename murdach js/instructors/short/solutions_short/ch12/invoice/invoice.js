"use strict";

const calculateDiscount = (customer, subtotal) => {
    if (customer == "reg") {
        if (subtotal >= 100 && subtotal < 250) {
            return .1;
        } else if (subtotal >= 250 && subtotal < 500) {
            return  .25;
        } else if (subtotal >= 500) {
            return .3;
        } else {
            return 0;
        }        
    }
    else if (customer == "loyal") {
        return .3;        
    }
    else if (customer == "honored") {
        if (subtotal < 500) {
            return .4;
        }
        else {
            return .5;
        }    
    }
};

const getFormattedDate = date => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateText = month + "/" + day + "/" + year;
    return dateText;    
}

$( document ).ready( () => {

    $("#calculate").click( () => {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val();
        subtotal = parseFloat(subtotal);
        let invoiceDateString = $("#invoice_date").val();
        let invoiceDate = new Date(invoiceDateString);

        if ( isNaN(subtotal) || subtotal <= 0) {
            alert("Subtotal must be a number greater than zero.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
        }
        if (invoiceDateString !== "" && invoiceDate == "Invalid Date") {
            alert("Please enter a valid invoice date.");
            $("#clear").click();
            $("#invoice_date").focus();
            return;
        }

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;
        
        // get the default date if one isn't entered
        if (invoiceDateString == "") {
            invoiceDate = new Date();
            invoiceDateString = getFormattedDate(invoiceDate);
        }

        // calculate the due date
        let dueDate = new Date(invoiceDateString);
        dueDate.setDate( dueDate.getDate() + 30 );
        const dueDateString = getFormattedDate(dueDate);

        $("#subtotal").val( subtotal.toFixed(2) );
        $("#invoice_date").val(invoiceDateString);
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );
        $("#due_date").val(dueDateString);         

        // set focus on type drop-down when done  
        $("#type").focus();
    });

    $("#clear").click( () => {

        $("#type").val("reg");
        $("#subtotal").val("");
        $("#invoice_date").val("");
        $("#percent").val("");
        $("#discount").val("");
        $("#total").val("");
        $("#due_date").val("");

        // set focus on type drop-down when done
        $("#type").focus();
    })

    // set focus on type drop-down on initial load
    $("#type").focus();
});

