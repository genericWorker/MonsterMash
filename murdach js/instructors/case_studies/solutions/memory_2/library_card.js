"use strict";

class Card {
    constructor(a) {
        a = $(a); // pass <a> tag to jQuery selector
        this.img = $(a.find("img")[0]);
        this.aId = a.attr("id");
    }
    isBlankOrRevealed() {
        return this.img.attr("src") !== cards.defaultSrc;
    }
    equals(imageToCompare) {
        return this.aId === imageToCompare.aId;
    }
}