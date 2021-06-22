"use strict";

const settings = {
    get playerName() {
        return sessionStorage.playerName || "";
    },
    set playerName(name) {
        sessionStorage.playerName = name;
    },
    get numberOfImages() {
        return parseInt(sessionStorage.numberOfImages) || 24;
    },
    set numberOfImages(num) {
        sessionStorage.numberOfImages = num;
    }
};