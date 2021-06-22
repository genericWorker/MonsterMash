"use strict";

var transList = [];

var getTransaction = function(index) {
    if (arguments.length === 0) { return transList.length; }
    else { return transList[index]; }
};

var addTransaction = function (type, amount, date) {
    // create the transaction array
    var trans = [];
    trans["type"] = type;
    trans["amount"] = parseFloat(amount);
    trans["amountDisplay"] = (type === "withdrawal") ? "(" + amount + ")" : amount;
    
    // use today's date if none provided
    if (arguments.length < 3) {
        date = new Date();
    } else {
        date = new Date(date);
    }
    // use substring to remove initial day-of-week value from date string
    trans["dateDisplay"] = date.toDateString().substring(4);

    // add the transaction to the list
    transList.push(trans);
};

var calculateBalance = function (type, amount, total) {
    if (type === "withdrawal") { return total - amount;
    } else { return total + amount; }
};