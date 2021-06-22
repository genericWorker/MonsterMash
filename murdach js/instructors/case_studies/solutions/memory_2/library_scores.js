"use strict";

const scores = ( () => {
    // private state
    let selection = 0;
    let correctSelection = 0;

    const isValid = (name, percentage) => name && name !== "" && !isNaN(percentage);
    
    const setHighScore = (name, percentage) => {
        if ( isValid(name, percentage) ) {
            localStorage.setItem(name, percentage);
        }
    };

    const getHighScore = name => {
        const percentage = localStorage.getItem(name) || null;
        return parseInt(percentage);
    };
    
    // public methods
    return {
        incrementTurn() {
            selection++;
        },
        incrementCorrectTurn() {
            correctSelection++;
        },
        allCardsRemoved(imgCount) {
            return (correctSelection === imgCount);
        },
        calculatePercent() {
            return Math.floor((correctSelection / selection) * 100);
        },
        compareScores(name, percentage) {
            if ( isValid(name, percentage) ) {
                const highScore = getHighScore(name);
                if (isNaN(highScore) || percentage > highScore) {
                    setHighScore(name, percentage);
                }
            }
        },
        displayHighScore(name) {
            let text = "";
            if (name !== "") {
                const percent = getHighScore(name);
                if (!isNaN(percent)) {
                    text = `${name}'s high score: ${percent}%`
                }
            }
            return text;
        }
    };
    
})(); // invoke IIFE