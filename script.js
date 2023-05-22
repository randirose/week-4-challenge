var timer = document.getElementById("timer");
var secondsLeft = 75;
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
var next = document.createElement("button");


startButton.addEventListener("click", setTime);
function setTime() {
    showQuestion(); //runs this function to show user questions
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
    questionAnswers.appendChild(next);
    next.textContent = "next";
    next.addEventListener("click", showQuestion2);
    // if user clicks next, removes elements and recreates same elements w different question answers
    // event listener for if user clicks anything other than "correct answer" to run function to subtract time from clock
}
function showQuestion2() {
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
    questionAnswers.appendChild(next);
    next.textContent = "next";
    // next.addEventListener("click", showQuestion2);
    // event listener for if user clicks anything other than "correct answer" to run function to subtract time from clock
}
function wrongAnswer() {
    // subtract time from clock - need to figure out how
}
function displayResult() {
    // will show final score, allow user to enter initials - takes them to the other html page with all high scores
}
