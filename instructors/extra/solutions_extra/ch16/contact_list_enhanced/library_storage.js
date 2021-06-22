"use strict";

var storage = {
    keyContacts: "contacts_2",
    getContacts: function() {
        // replacer reviver to add dashes to phone number
        var reviver = function (key, value) {
            if (key === "") { return value; }
            if (key === "p") { 
                // add dashes back to phone number
                /* note: substr 2nd argument is length of string to return */
                switch (value.length) {
                    case 7:   // no area code
                        return value.substr(0,3) + "-" + value.substr(3);
                    case 10:  // area code
                        return value.substr(0,3) + "-" + value.substr(3,3) + "-" + value.substr(6);
                    case 11:  // area code plus 1
                        return value.substr(0,1) + "-" + value.substr(1,3) + "-" + value.substr(4,3) + "-" + value.substr(7);
                    default:  // not a valid phone format - return stored value as-is
                        return value;
                }   
            } else { 
                return value; 
            }
        }; 
        
        // get string from local storage 
        var storageString = localStorage.getItem(this.keyContacts) || null;
        
        // convert string to JavaScript object and return, or return empty array if string is null
        return JSON.parse(storageString, reviver) || [];
    },
    setContacts: function(value) {
        // replacer function to strip non-numeric characters from phone number
        var replacer = function (key, value) {
            if (key === "") { return value; }
            if (key === "p") { 
                var stripped = "";
                // strip all non-numeric characters from phone number
                for (var i = 0; i < value.length; i++) {
                    if (!isNaN(value[i])) {
                        stripped = stripped + value[i];
                    }
                }
                return stripped;
            } else { return value; }
        }; 
        
        // convert JavaScript object to string
        var storageString = JSON.stringify(value, replacer);
        
        // store string in local storage 
        localStorage.setItem(this.keyContacts, storageString);
    },
    clearContacts: function() {
        localStorage.setItem(this.keyContacts, "");
    }
};