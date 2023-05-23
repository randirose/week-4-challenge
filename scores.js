var highscoresList = document.getElementById("highscores");
var scoreListItem = document.createElement("li");

highscoresList.appendChild(scoreListItem);

function renderHighScores() {
    var showScore = JSON.parse(localStorage.getItem("userInput"));
    if (showScore !== null) {
        scoreListItem.textContent = "Name: " + showScore.name + "; Score: " + showScore.score;
    }
}
renderHighScores();