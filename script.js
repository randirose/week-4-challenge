var timer = document.getElementById("timer");
var secondsLeft = 75;
var startButton = document.getElementById("start-button");
var wrongAnswer = document.getElementById("wrong");


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

function displayResult() {
    // will show final score, if user won or lost
}
