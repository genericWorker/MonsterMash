"use strict";
var fields = {
    arrival_date : {
        message: "Use mm/dd/yyyy format.",
        required: "Arrival date is required.",
        isDate: "Arrival date is invalid."
    },
    nights: {
        required: "Nights is required.",
        isNumber: "Nights must be a number."
    },
    name: {
        required: "Name is required."
    },
    email: {
        required: "Email address is required.",
        isEmail: "Email address is invalid."
    },
    phone: {
        required: "Phone number is required.",
        isPhone: "Phone number is invalid."
    }    
};