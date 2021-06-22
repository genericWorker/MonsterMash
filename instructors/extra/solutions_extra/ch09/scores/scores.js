var $ = function (id) { return document.getElementById(id); };

var scores = [];
var scoresString = [];

var displayScores = function () {   
    // calculate the average score
    var totalScore = 0;
    for (var i in scores) {
        totalScore += scores[i];
    }
    var numberOfScores = scores.length;
    var averageScore = totalScore / numberOfScores;    

    // display the scores on the web page
    $("scores").value = scoresString.join("\n");
    $("average_score").value = averageScore.toFixed(1);
};

var addScore = function () {
    // get the data from the form
    var scoreNumber = parseInt( $("score").value );
    var scoreString = $("last_name").value + ", " + 
                      $("first_name").value + ": " + 
                      $("score").value;

    // store the data in an array
    scores.push(scoreNumber);
    scoresString.push(scoreString);
    
    // display the scores and clear the add form
    displayScores();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
};

var clearScores = function () {   
    // delete the data from the arrays
    scores = [];
    scoresString = [];
    
//    // alternative way to delete data
//    scores.length = 0;
//    scoresString.length = 0;
    
    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    
    $("first_name").focus();
};

var sortScores = function () {   
    // sort the scores
    scoresString.sort();
    
    // display the scores
    displayScores();    
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};