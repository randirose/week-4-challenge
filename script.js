var timer = document.getElementById("timer");
var secondsLeft = 75;
var newTime = timer.textContent-10000;
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
var responseRight = document.createElement("p");
var responseWrong = document.createElement("p");

startButton.addEventListener("click", setTime);
startButton.addEventListener("click", showQuestion);
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            displayResult();
        };
    

        
    }, 1000);
}



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
    questionWrong1.addEventListener("click", wrongAnswer);
    questionWrong2.addEventListener("click", wrongAnswer);
    questionWrong3.addEventListener("click", wrongAnswer);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
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
    questionCorrect.addEventListener("click", showQuestion2);
    questionWrong1.addEventListener("click", showQuestion2);
    questionWrong2.addEventListener("click", showQuestion2);
    questionWrong3.addEventListener("click", showQuestion2);
    questionWrong1.addEventListener("click", wrongAnswer);
    questionWrong2.addEventListener("click", wrongAnswer);
    questionWrong3.addEventListener("click", wrongAnswer);
    
    // event listener for if user clicks anything other than "correct answer" to run function to subtract time from clock
}
function wrongAnswer() {
//    needs to subtract time from clock

    }

function displayResultWrong() {
    document.body.appendChild(responseWrong);
    responseWrong.textContent = "Sorry, that's incorrect!";
}
function displayResultRight() {
    document.body.appendChild(responseRight);
    responseWrong.textContent = "That's correct!";
}
console.log(newTime);