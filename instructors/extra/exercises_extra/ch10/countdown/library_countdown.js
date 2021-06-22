"use strict";

var clearMessage = function(messageNode) {
    messageNode.nodeValue = " ";
};

var hasNoError = function(messageNode) {
    return (messageNode.nodeValue === " ") ? true: false;
};