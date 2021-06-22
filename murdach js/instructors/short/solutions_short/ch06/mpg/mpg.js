"use strict";

const $ = selector => document.querySelector(selector);

// const focusAndSelect = selector => {
//     const elem = $(selector);
//     elem.focus();
//     elem.select();
// };

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);
    let isValid = true;

    if (isNaN(miles) || miles <= 0) {
        $("#miles").nextElementSibling.textContent =
            "Must be a valid number greater than zero.";
        // focusAndSelect("#miles");
        isValid = false;
    } else {
        miles.nextElementSibling.textContent = "";
    }

    if (isNaN(gallons) || gallons <= 0) {
        $("#gallons").nextElementSibling.textContent =
            "Must be a valid number greater than zero.";
        // focusAndSelect("#gallons");
        isValid = false;
    } else {
        gallons.nextElementSibling.textContent = "";

    if ( isvalid )
        $("#mpg").value = calculateMPG(miles, gallons);
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    $("#miles").nextElementSibling.textContent = "*";
    $("#gallons").nextElementSibling.textContent = "*";
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});