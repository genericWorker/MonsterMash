"use strict";
var Validate = function() {};

Validate.prototype.isBlank = function(text) {
    return (text === "");
};

Validate.prototype.isNumber = function(text) {
    return /^\d$/.test(text);
};

Validate.prototype.isDate = function(text) {
    if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(text) ) return false;
    var dateParts = text.split("/");
    var month = parseInt(dateParts[0]);
    var date = parseInt(dateParts[1]);
    var year = parseInt(dateParts[2]);
    if ( month < 1 || month > 12 ) { return false; }
    else {
        switch (month) {
            case 2: 
                return (date > 28) ? false: true; //doesn't handle leap year
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                return (date > 30) ? false: true;
                break;
            default:
                return (date > 31) ? false: true;
                break;
        }
    }
    if ( year < 1000 || year > 3000 ) return false;
    return true;
};

Validate.prototype.isEmail = function(text) {
    if (text.length === 0) return false;
    var parts = text.split("@");
    if (parts.length !== 2 ) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    var address =
        "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    var localPart = new RegExp( address + "|" + quotedText );
    if ( !parts[0].match(localPart) ) return false;
    var hostnames =
        "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    var tld = "[a-zA-Z0-9]{2,6}";
    var domainPart = new RegExp("^" + hostnames + tld + "$");
    if ( !parts[1].match(domainPart) ) return false;
    return true;
};

Validate.prototype.isPhone = function(text) {
    return /^\d{3}-\d{3}-\d{4}$/.test(text);
};