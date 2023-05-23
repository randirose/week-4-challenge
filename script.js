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
},
{
    question3: "question3",
    correctAnswer3: "correct answer3",
    incorrectAnswers3: ["wrong 1.3", "wrong 2.3", "wrong 3.3"]
},
{
    question4: "question4",
    correctAnswer4: "correct answer4",
    incorrectAnswers4: ["wrong 1.4", "wrong 2.4", "wrong 3.4"]
},
{
    question5: "question5",
    correctAnswer5: "correct answer5",
    incorrectAnswers5: ["wrong 1.5", "wrong 2.5", "wrong 3.5"]
}];
var questionTitle = document.createElement("h2");
var questionAnswers = document.createElement("ul");
var questionCorrect = document.createElement("button");
questionCorrect.setAttribute('id', 'correct');
var questionWrong1 = document.createElement("button");
var questionWrong2 = document.createElement("button");
var questionWrong3 = document.createElement("button");
var displayResultText = document.createElement("p");
var resultsForm = document.createElement("form");
var resultsInput = document.createElement("input");
var resultsInputScore = document.createElement("p");
var resultsHeader = document.createElement("h3");



startButton.addEventListener("click", showQuestion);
startButton.addEventListener("click", clearCount);
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
var count = localStorage.getItem("correct");
questionCorrect.addEventListener("click", function(){
    count++;
    localStorage.setItem("correct", count);
});
function clearCount() {
    count = "";
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
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
    document.body.appendChild(displayResultText);
    // questionCorrect.addEventListener("click", function(){
    //     count++;
    //     localStorage.setItem("correct", count);
    // });
};


function showQuestion2() {
    setTimeout(()=> {
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
    questionCorrect.addEventListener("click", showQuestion3);
    questionWrong1.addEventListener("click", showQuestion3);
    questionWrong2.addEventListener("click", showQuestion3);
    questionWrong3.addEventListener("click", showQuestion3);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
    document.body.appendChild(displayResultText);
    // questionCorrect.addEventListener("click", function(){
    //     count++;
    //     localStorage.setItem("correct", count);
    // });
    // event listener to add points to memory (function) to then display later
    },2000);
};


function showQuestion3() {
    setTimeout(()=> {
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[2].question3;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[2].correctAnswer3;
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[2].incorrectAnswers3[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[2].incorrectAnswers3[1];
    questionAnswers.appendChild(questionWrong3);
    questionWrong3.textContent = questions[2].incorrectAnswers3[2];
    questionCorrect.addEventListener("click", showQuestion4);
    questionWrong1.addEventListener("click", showQuestion4);
    questionWrong2.addEventListener("click", showQuestion4);
    questionWrong3.addEventListener("click", showQuestion4);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
    document.body.appendChild(displayResultText);
    // questionCorrect.addEventListener("click", function(){
    //     count++;
    //     localStorage.setItem("correct", count);
    // });
    // event listener to add points to memory (function) to then display later
},2000);
};

function showQuestion4() {
    setTimeout(()=> {
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[3].question4;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[3].correctAnswer4;
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[3].incorrectAnswers4[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[3].incorrectAnswers4[1];
    questionAnswers.appendChild(questionWrong3);
    questionWrong3.textContent = questions[3].incorrectAnswers4[2];
    questionCorrect.addEventListener("click", showQuestion5);
    questionWrong1.addEventListener("click", showQuestion5);
    questionWrong2.addEventListener("click", showQuestion5);
    questionWrong3.addEventListener("click", showQuestion5);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
    document.body.appendChild(displayResultText);
    // questionCorrect.addEventListener("click", function(){
    //     count++;
    //     localStorage.setItem("correct", count);
    // });
    // event listener to add points to memory (function) to then display later
},2000);
};

function showQuestion5() {
    setTimeout(()=> {
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[4].question5;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[4].correctAnswer5;
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[4].incorrectAnswers5[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[4].incorrectAnswers5[1];
    questionAnswers.appendChild(questionWrong3);
    questionWrong3.textContent = questions[4].incorrectAnswers5[2];
    questionCorrect.addEventListener("click", displayResult);
    questionWrong1.addEventListener("click", displayResult);
    questionWrong2.addEventListener("click", displayResult);
    questionWrong3.addEventListener("click", displayResult);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
    document.body.appendChild(displayResultText);
    // questionCorrect.addEventListener("click", function(){
    //     count++;
    //     localStorage.setItem("correct", count);
    // });
    // event listener to add points to memory (function) to then display later
},2000);
};

function displayResultWrong() {
    displayResultText.textContent = "Sorry, that's incorrect!";
    setTimeout(function(){
        displayResultText.textContent = '';
    }, 2000);
}
function displayResultRight() {
    displayResultText.textContent = "That's correct!";
    setTimeout(function(){
        displayResultText.textContent = '';
    }, 2000);
}
function displayResult(){
    setTimeout(()=> {
    // remove questions/answers from page
    document.body.removeChild(questionTitle);
    document.body.removeChild(questionAnswers);
    questionAnswers.removeChild(questionCorrect);
    questionAnswers.removeChild(questionWrong1);
    questionAnswers.removeChild(questionWrong2);
    questionAnswers.removeChild(questionWrong3);
    
    
    
    // add form to submit results
    document.body.appendChild(resultsForm);
    resultsForm.appendChild(resultsHeader);
    resultsHeader.textContent = "Enter your name below to save your score!"

    
    resultsForm.appendChild(resultsInputScore);
    // var count = localStorage.getItem("correct");
    resultsInputScore.innerHTML = count;
    resultsForm.appendChild(resultsInput);
    resultsInput.setAttribute("name", "string");
    resultsInput.setAttribute('id', 'user-name');
    // var userName = document.getElementById("user-name");
    // var userInput = {
    //     name: userName.value,
    //     score: count
    // };
    


},2000);
};
