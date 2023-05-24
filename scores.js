var highscoresList = document.getElementById("highscores");
var scores = JSON.parse(localStorage.getItem('userInput'));


function renderHighScores() {
    highscoresList.innerHTML = "";

    if (scores !== null) {

    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

        var scoreListItem = document.createElement("li");
        
        scoreListItem.textContent = "Name: " + score.name + " | Score: " + score.score;
        
        scoreListItem.setAttribute("data-index", i);
        
        highscoresList.appendChild(scoreListItem);
        
        
    }
}
    
}
renderHighScores();