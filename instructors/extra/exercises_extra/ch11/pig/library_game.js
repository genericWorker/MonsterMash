var game = {
    player1: null, // these properties will be set by the load method  
    player2: null, 
    currentPlayer: null, 
    load: function(name1Node, name2Node, score1Node, score2Node, currentNode, dieNode, totalNode) {
        this.player1 = {
            name: name1Node,
            score: score1Node,
            pig: new Pig()
        };
        this.player2 = {
            name: name2Node,
            score: score2Node,
            pig: new Pig()
        };
        this.currentPlayer = {
            name: currentNode,
            roll: dieNode,
            total: totalNode,
            pig: this.player1.pig  // initial value - will be changed by changePlayer method
        };
        return this;
    },
    isValid: function() {
        if (this.player1.name.value === "" || this.player2.name.value === "") {
            return false;
        } else { 
            return true; 
        }
    },
    clearScores: function() {
        // reset player1 score value and reset its Pig object
        
        // reset player2 score value and reset its Pig object
    },
    setInitialPlayer: function() {
        // if game is valid set initial player by calling the changePlayer method
    },
    takeTurn: function() {
        // use the Pig object of the currentPlayer property to take a turn
    },
    changePlayer: function() {
        // display result of last roll in the currentPlayer display properties
        
        // if current player's turn is zero, need to switch players
        // and start new turn
    },
    hold: function() {
        // use the currentPlayer Pig object to hold
        
        // determine whether player1 or player1 are the current player, then
        // update that player's score with the current total
    },
    checkWinner: function() {
        // check the players' Pig objects to see if either is at or above 100
        // total points. If so, return that player's name. Otherwise, return 
        // the string "none".
    }
};