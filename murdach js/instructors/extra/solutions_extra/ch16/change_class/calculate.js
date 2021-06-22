"use strict";
$(document).ready( () => {
    $("#calculate").click( () => {
        // get the number of cents from the user
        let cents = parseInt($("#cents").val());
        cents = Math.floor(cents);

        // if cents is valid, make change
        const coins = new Coins();
        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
            coins.makeChange(cents);
        }

        // display coins
        $("#quarters").val(coins.quarters);
        $("#dimes").val(coins.dimes);
        $("#nickels").val(coins.nickels);
        $("#pennies").val(coins.cents);

        // select cents text box for next entry
        $("#cents").select();
    }); // end click()
    
    // set focus on initial load
    $("#cents").focus();
}); // end ready()