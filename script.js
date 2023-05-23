var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var wrongAnswer = document.getElementById("wrong");
var questions = [{
    question1: "question1",
    correctAnswer1: "correct answer1",
    incorrectAnswers1: ["wrong 1", "wrong 2", "wrong 3"]
}, {
    question2: "question2",
    correctAnswer2: "correct answer2",
    incorrectAnswers2: ["wrong 1.2", "wrong 2.2", "wrong 3.2"]
}];
var questionTitle = document.createElement("h2");
var questionAnswers = document.createElement("ul");
var questionCorrect = document.createElement("button");
var questionWrong1 = document.createElement("button");
var questionWrong2 = document.createElement("button");
var questionWrong3 = document.createElement("button");
var displayResultText = document.createElement("p");


startButton.addEventListener("click", showQuestion);
startButton.addEventListener("click", function() {
    var secondsLeft = 75;
    function startTimer(){
        var gameTimer = setInterval(function(){
            secondsLeft--;
            timer.textContent="Time remaining: "+secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(gameTimer);
                timer.textContent="TIME UP!"
                displayResult();
            }
        }, 1000);
    }
    questionWrong1.addEventListener('click', function() {
        secondsLeft -= 10;
        timer.textContent="Time remaining: "+secondsLeft;
    });
    questionWrong2.addEventListener('click', function() {
        secondsLeft -= 10;
        timer.textContent="Time remaining: "+secondsLeft;
    });
    questionWrong3.addEventListener('click', function() {
        secondsLeft -= 10;
        timer.textContent="Time remaining: "+secondsLeft;
    });
    startTimer();
});

function showQuestion() {
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[0].question1;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[0].correctAnswer1;
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[0].incorrectAnswers1[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[0].incorrectAnswers1[1];
    questionAnswers.appendChild(questionWrong3);
    questionWrong3.textContent = questions[0].incorrectAnswers1[2];
    questionCorrect.addEventListener("click", showQuestion2);
    questionWrong1.addEventListener("click", showQuestion2);
    questionWrong2.addEventListener("click", showQuestion2);
    questionWrong3.addEventListener("click", showQuestion2);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
}

function showQuestion2() {
    // need to remove the right/wrong display when going to the next question
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[1].question2;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[1].correctAnswer2;
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[1].incorrectAnswers2[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[1].incorrectAnswers2[1];
    questionAnswers.appendChild(questionWrong3);
    questionWrong3.textContent = questions[1].incorrectAnswers2[2];
    questionCorrect.addEventListener("click", showQuestion2);
    questionWrong1.addEventListener("click", showQuestion2);
    questionWrong2.addEventListener("click", showQuestion2);
    questionWrong3.addEventListener("click", showQuestion2);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
    
    // event listener to add points to memory (function) to then display later
}
 

function displayResultWrong() {
    document.body.appendChild(displayResultText);
    displayResultText.textContent = "Sorry, that's incorrect!";
}
function displayResultRight() {
    document.body.appendChild(displayResultText);
    displayResultText.textContent = "That's correct!";
}
function displayResult(){

}
