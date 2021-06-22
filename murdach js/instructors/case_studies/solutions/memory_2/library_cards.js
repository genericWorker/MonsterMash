"use strict";

const cards = ( () => {
    // private state
    const backImgSrc = "images/back.png"; 
    const blankImgSrc = "images/blank.png"; 
    const cardImgSrcStart = "images/card_";
    let numImages = 0;
    
    const preloadAndStoreImages = () => {
        // preload blank image and back of card image - don't need to store these
        const back = new Image();
        back.src = "images/back.png";    
        const blank = new Image();
        blank.src = "images/blank.png";
    
        // create array to store memory images
        const images = [];
    
        // get number of images to store
        const numberOfImages = settings.numberOfImages;
        
        // preload images and store in array
        for (let i = 1; i <= numberOfImages; i++) { 
            const img = new Image();
            img.src = `${cardImgSrcStart}${i}.png`;
            images.push(img);
        }
        numImages = images.length;
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
    
    // public methods
    return {
        get imageCount() {
            return numImages;
        },
        get defaultSrc() {
            return backImgSrc;
        },
        get blankSrc() {
            return blankImgSrc;
        },
        createCardsHtml() {
            // set initial counter value and max cards per row
            let counter = 1;
            let max = 8;

            // initialize other variables 
            let cardIndex = 0;
            let src = "";
            let html = "";
            
            // create cards
            const images = preloadAndStoreImages();
            const cards = storeCardSrcs(images);

            // create cards HTML
            if (Array.isArray(cards)) {
                html = "<div>"; // open first div tag

                while (cards.length > 0) {
                    // randomly select card from array
                    cardIndex = Math.floor(Math.random() * cards.length);
                    src = cards[cardIndex];
                    cards.splice(cardIndex, 1); // remove card from array

                    // create HTML for link and image
                    html += `<a id="${src}" href="#"><img src="${backImgSrc}" alt=""></a>`;

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
	    },
        fadeCardFlip(img, src, duration) {
            img.fadeOut(duration, () => {
                img.attr( "src", src ).fadeIn(duration);
            });
        },
        slideCardFlip(img, src, duration) {
            img.slideUp(duration, () => {
                img.attr( "src", src ).fadeIn(duration);
            });
        }
    };
    
})(); // invoke IIFE