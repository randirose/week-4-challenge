var timer = document.getElementById("timer");
var secondsLeft = 75;
var startButton = document.getElementById("start-button");
var wrongAnswer = document.getElementById("wrong");
var questions = [{
    question1: "question1",
    correctAnswer1: "correct answer1",
    incorrectAnswers1: ["wrong 1", "wrong 2", "wrong 3"]
}, {
    question2: "question1",
    correctAnswer2: "correct answer1",
    incorrectAnswers2: ["wrong 1", "wrong 2", "wrong 3"]
}];


startButton.addEventListener("click", setTime);
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft;

        // if (wrongAnswer.addEventListener("click", function() {
        //     secondsLeft - 10;
        //     secondsLeft--;
        //     timer.textContent = "Time left: " + secondsLeft;
        // })); - needs to subtract time if the user answers wrong

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            displayResult();
        };

        
    }, 1000);
}

startButton.addEventListener("click", showQuestion);

function showQuestion(array) {
    // randomizes questions from var questions array to show one at a time
}

function displayResult() {
    // will show final score, if user won or lost
}
