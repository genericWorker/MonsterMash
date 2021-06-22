"use strict";

const coins = {
    cents: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0,
    makeChange(cents) {
        if (isNaN(cents) || cents < 0 || cents > 99) {
            throw Error("Cents must be a number between 0 and 99.");
        }
        
        this.quarters = Math.floor(cents / 25);
        cents = cents % 25;  // remainder

        this.dimes = Math.floor(cents / 10);
        cents = cents % 10;  // remainder

        this.nickels = Math.floor(cents / 5);
        this.cents = cents % 5;  // remainder
    }
};