window.onload = rotate;
var theAd = 0;
var adImages = newArray( "images/reading1.gif", "images/reading2.gif", "images/reading3.gif" );

function rotate() {
    theAd++;
    if (theAd == adImages.length) {
        theAd = 0;
    }
    document.getElementById( "adBanner" ).src = adImages[theAd];
    setTimeout( rotate, 3 * 1000 );
}