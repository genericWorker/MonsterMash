var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var addScore = function () {
	// get user entries
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = name;
		scores[scores.length] = score;
	    $("name").value = "";
	    $("score").value = "";
	}
    $("name").focus();
};
var displayResults = function () {
	var scoreTotal = 0;
	var highScore = 0;
	var highScoreName;
	var averageScore;
	for ( var i = 0; i < scores.length; i++ ){
       	scoreTotal += scores[i];
		if (scores[i] > highScore) {
			highScore = scores[i];
			highScoreName = names[i];
		}
    }
	averageScore = (scoreTotal / scores.length).toFixed(0);
	var results = "<h2>Results</h2>";
	results += "<p>Average score = " + averageScore + "</p>";
	results += "<p>High score = " + highScoreName + " with a score of " + highScore + "</p>";
	$("results").innerHTML = results;
};
var displayScores = function () {
	var scoreDisplay = "<h2>Scores</h2>";
	scoreDisplay += "<tr><td><b>Name</b></td><td><b>Score</b></td></tr>";
	for ( var i = 0; i < scores.length; i++ ){
		scoreDisplay += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
	}
   	$("scores_table").innerHTML = scoreDisplay;
};
window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};


