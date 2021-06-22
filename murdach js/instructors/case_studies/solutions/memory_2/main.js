"use strict";
$(document).ready( () => {
    // attach tabs widget 
    $("#tabs").tabs();

    // display cards on page
    $("#cards").html( cards.createCardsHtml() );
    
    // display settings and high score for player
    let name = settings.playerName;
    $("#player_name").val( name );
    $("#num_cards").val( settings.numberOfImages * 2 );
    
    if (name !== "") {
        $("#player").text( "Player: " + name );    	
    } 
    $("#high_score").text( scores.displayHighScore(name) );

    // initialize variables
    let lastCard = null, isFirst = true;
    
    // add click event handler for each card
    $("#cards").find("a").each( (index, a) => {
        $(a).click( evt => {
            // cancel the default action of the clicked <a> tag
            evt.preventDefault();
            
            // pass clicked <a> tag to the Card constructor
            let currentCard = new Card(a);
            
            // don't do anything if the card is blank or already revealed
            if ( currentCard.isBlankOrRevealed() ) { return; }

            // fade img tag from default image to image in the id 
            // attribute of the <a> tag
            cards.fadeCardFlip(currentCard.img, currentCard.aId, 500);
            
            // if isFirst flag is true, that means the clicked card is the
            // first card of the turn. Store clicked <a> tag and set flag to false
            if (isFirst) { 
                lastCard = currentCard; 
                isFirst = false;
            } else { // clicked card is second card of turn               
                // update count 
                scores.incrementTurn();
                
                // if current card and last card match...            
                if (currentCard.equals(lastCard)) {
                    // update count 
                    scores.incrementCorrectTurn();
                    
                    // slide both child img tags to blank image after 1 second
                    setTimeout( () => { 
                        cards.slideCardFlip(currentCard.img, cards.blankSrc, 500);
                        cards.slideCardFlip(lastCard.img, cards.blankSrc, 500);
                    }, 1000);
                    
                    // if all images have been correctly selected, calculate percent 
                    // and display after 1.5 seconds 
                    if ( scores.allCardsRemoved(cards.imageCount) ) {
                        setTimeout( () => { 
                            const percent = scores.calculatePercent();
                            $("#correct").text("Correct: " + percent + "%");
                            
                            // save and display high score for player
                            name = settings.playerName;
                            scores.compareScores(name, percent);
                            $("#high_score").text( scores.displayHighScore(name) );
                        }, 1500);     
                    }      
                } else {
                    // fade both images back to default image after 2 seconds
                    setTimeout( () => { 
                        cards.fadeCardFlip(currentCard.img, cards.defaultSrc, 500);
                        cards.fadeCardFlip(lastCard.img, cards.defaultSrc, 500);
                    }, 2000);
                } // end inner if

                // reset isFirst flag for next turn
                isFirst = true;
                
            } // end outer if

        }); // end click()
    }); // end each()
    
    // add click event handler for Save Settings button
    $("#save_settings").click( () => {
        // save settings
        settings.playerName = $("#player_name").val();
        settings.numberOfImages = parseInt( $("#num_cards").val() ) / 2; // divide by 2 because cards contains 2 of each card
        
        // reload page 
        location.reload();
    }); // end click()
    
}); // end ready()