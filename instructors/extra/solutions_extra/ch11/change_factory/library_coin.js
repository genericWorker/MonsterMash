"use strict";

var calculateCoins = function(cents) { 
    // create object with methods
    var calc = Object.create({
        isValid: function() {
            if (isNaN(this.cents) || this.cents < 0 || this.cents > 99) {
                return false;
            } else {
                return true;
            }
        },
        getNumber: function(divisor) {
            var coins = this.cents / divisor;
            if (this.cents > 0) {
                this.cents = this.cents % divisor;
            }
            return Math.floor(coins);
        }
    });
    
    // add property and return object
    calc.cents = Math.floor(parseInt(cents));
    return calc;
};