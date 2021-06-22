"use strict";

const getNumberOfImages = () => parseInt(sessionStorage.numberOfImages) || 24;
const setNumberOfImages = num => sessionStorage.numberOfImages = num;

const getPlayerName = () => sessionStorage.playerName || "";
const setPlayerName = name => sessionStorage.playerName = name;

const preloadAndStoreImages = () => {
	// preload blank image and back of card image - don't need to store these
	const back = new Image();
	back.src = "images/back.png";    
	const blank = new Image();
	blank.src = "images/blank.png";

	// create array to store memory images
	const images = [];

	// get number of images to store
	const numberOfImages = getNumberOfImages(); // get value from settings
	
	// preload images and store in array
	for (let i = 1; i <= numberOfImages; i++) { // use value from settings
		const img = new Image();
		img.src = `images/card_${i}.png`;
		images.push(img);
	}
	return images;
};

const storeCardSrcs = images => {
	const srcs = [];
	if (Array.isArray(images)) {
		images.forEach(img => {
			// store two of each
			srcs.push(img.src);
			srcs.push(img.src);
		});
	}
	return srcs;
};

const createCardsHtml = (cards, backSrc) => {
	// set initial counter value and max cards per row
    let counter = 1;
    let max = 8;

	// initialize other variables 
    let cardIndex = 0;
    let src = "";
    let html = "";

	// create cards HTML
	if (Array.isArray(cards)) {
		html = "<div>"; // open first div tag
	
		while (cards.length > 0) {
			// randomly select card from array
			cardIndex = Math.floor(Math.random() * cards.length);
			src = cards[cardIndex];
			cards.splice(cardIndex, 1); // remove card from array
		
			// create HTML for link and image
			html += `<a id="${src}" href="#"><img src="${backSrc}" alt=""></a>`;
		
			// if end of row, clear float, close div tag and open new div tag, and reset counter
			if (counter === max) {
				html += "<p class='clear'></p></div><div>";
				counter = 1;
			} else { // otherwise, increment counter
				counter++;
			}
		}
		html+= "</div>"; // close last div tag
	}
	return html;
};

const fadeCardFlip = (img, newSrc, duration) => {
	img.fadeOut(duration, () => img.attr("src", newSrc).fadeIn(duration) );
};

const slideCardFlip = (img, newSrc, duration) => {
	img.slideUp(duration, () => img.attr( "src", newSrc ).fadeIn(duration) );
};

const getHighScore = name => {
	const percentage = localStorage.getItem(name) || null;
	return parseInt(percentage);
};

const isValid = (name, percentage) => name && name !== "" && !isNaN(percentage);

const setHighScore = (name, percentage) => {
	if ( isValid(name, percentage) ) {
		localStorage.setItem(name, percentage);
	}
};

const compareScores = (name, percentage) => {
	if ( isValid(name, percentage) ) {
		const highScore = getHighScore(name);
		if (isNaN(highScore) || percentage > highScore) {
			setHighScore(name, percentage);
		}
	}
};

const displayHighScore = name => {
	if (name !== "") {
		const percent = getHighScore(name);
		if (!isNaN(percent)) {
			$("#high_score").text(`High score: ${percent}%`);
		}
	}
};

$(document).ready( () => {
    // attach tabs widget 
    $("#tabs").tabs();

    // initialize variables
    let lastA = null;
    let lastImg = null;
    let isFirst = true;
    let isOkToClick = true;
    let selection = 0;
    let correctSelection = 0;
    	
    // preload images and store Image objects for cards in images array		
	const images = preloadAndStoreImages();
    
    // store two src strings for each Image object in cards array
    const cards = storeCardSrcs(images);
    
    // randomly add each src in the cards array to an html string and 
    // display html string on page
    const html = createCardsHtml(cards, "images/back.png");
    $("#cards").html( html );
    
    // display settings and high score for player
    let name = getPlayerName();
    $("#player_name").val(name);
    $("#num_cards").val( getNumberOfImages() * 2 );
    
    if (name !== "") {
        $("#player").text(`Player: ${name}`);    	
    } 
    
    displayHighScore(name);
    
	// add click event handler for each card
    $("#cards").find("a").each( (index, a) => {
        $(a).click( evt => {
            // cancel the default action of the clicked <a> tag
			evt.preventDefault();
            
            // get the clicked <a> tag and its child img tag
            const a = $(evt.currentTarget);
            const img = $(a.find("img")[0]);
            
            // don't do anything if the image is blank or already revealed, or last turn isn't done yet
            if (img.attr("src") !== "images/back.png" || !isOkToClick) { return; }

            // fade img tag from default image to image in the id 
            // attribute of the <a> tag
            fadeCardFlip(img, a.attr("id"), 500);
            
            // if isFirst flag is true, that means the clicked card is the
            // first card of the turn. Store clicked <a> tag and set flag to false
            if (isFirst) { 
                lastA = a; 
                isFirst = false;
            } else { // clicked card is second card of turn    
                // set okToClick flag to false for this turn
                isOkToClick = false;
                
                // get child img tag of last clicked <a> tag
                lastImg = $(lastA.find("img")[0]);
                
                // update count 
                selection++;
                
                // if id attribute for last clicked and current <a> match...             
                if (lastA.attr("id") === a.attr("id")) {
                    // update count 
                    correctSelection++;
                    
                    // slide both child img tags to blank image after 1 second,
                    // reset isOkToClick flag back to true for next turn
                    setTimeout(function(){ 
                        slideCardFlip(img, "images/blank.png", 500);
                        slideCardFlip(lastImg, "images/blank.png", 500);
                        isOkToClick = true;
                    }, 1000);
                    
                    // if all images have been correctly selected, calculate % 
                    // and display after 1.5 seconds 
                    if ( correctSelection == images.length) {
                        setTimeout( () => { 
                            const percent = Math.floor((correctSelection / selection) * 100);
                            $("#correct").text(`Correct: ${percent}%`);
                            
                            // save and display high score for player
                            name = getPlayerName();
                            compareScores(name, percent);
                            displayHighScore(name);
                        }, 1500);     
                    }      
                } else {
                    // fade both images back to default image after 2 seconds,
                    // reset isOkToClick flag back to true for next turn
                    setTimeout( () => { 
                        fadeCardFlip(img, "images/back.png", 500);
                        fadeCardFlip(lastImg, "images/back.png", 500);
                        isOkToClick = true;
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
        setPlayerName( $("#player_name").val() );
        setNumberOfImages( parseInt( $("#num_cards").val() ) / 2 ); // divide by 2 because cards contains 2 of each card
        
        // reload page 
        location.reload();
	}); // end click()
    
}); // end ready()