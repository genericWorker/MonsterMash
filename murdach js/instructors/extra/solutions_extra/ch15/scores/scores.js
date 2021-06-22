"use strict";

const displayScores = (scores, displayStrings) => {   
    // calculate the average score
    let totalScore = 0;
    for (let score of scores) {
        totalScore += score;
    }
    const averageScore = totalScore / scores.length;    

    // display the scores on the web page
    $("#scores").val( displayStrings.join("\n") );
    $("#average_score").text( averageScore.toFixed(1) );
};

$(document).ready( () => {
    // initialize arrays for the scores and the displayStrings
    const scores = [];
    const displayStrings = [];
    
    $("#add_button").click( () => {
        // get the data from the form
        const fName = $("#first_name").val();
        const lName = $("#last_name").val();
        const score = parseInt( $("#score").val() );

        if (score && fName && lName) {
            // store the data in the arrays
            scores.push(score);
            displayStrings.push( `${lName}, ${fName}: ${score}` );

            // display the scores 
            displayScores(scores, displayStrings);

            // get the add form ready for next entry
            $("#first_name").val( "" );
            $("#last_name").val( "" );
            $("#score").val( "" );
            $("#first_name").focus();
        } else {
            alert ("You must enter a first name, last name, and numeric score.")
        }
    }); // end click()
    
    $("#clear_button").click( () => {
        // delete the data from the arrays
        scores.length = 0;
        displayStrings.length = 0;

        // remove the score data from the web page
        $("#average_score").text("");
        $("#scores").val("");

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click( () => {
        // sort the scores
        displayStrings.sort();

        // display the scores
        displayScores(scores, displayStrings);
    }); // end click()
    
    $("#first_name").focus();
}); // end ready()