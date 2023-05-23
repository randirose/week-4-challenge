var highscoresList = document.getElementById("highscores");
var scores = [];


function renderHighScores() {
    highscoresList.innerHTML = "";
    var storedScores = JSON.parse(localStorage.getItem("userInput"));
    if (storedScores !== null) {
    scores = storedScores;
}
    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

        var scoreListItem = document.createElement("li");
        
        scoreListItem.textContent = "Name: " + score.name + " | Score: " + score.score;
        
        scoreListItem.setAttribute("data-index", i);
        
        highscoresList.appendChild(scoreListItem);
        
        
    }
    
    storeScores();
    
}
function init() {
   
    var storedScores = JSON.parse(localStorage.getItem("scores"));
        if (storedScores !== null) {
        scores = storedScores;
    }
    scores.push(storedScores);
    renderHighScores();
}
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}
// function displayScores() {
//     scores.push(scoreListItem.value);
//     storeScores();
//     renderHighScores();
// }
init();