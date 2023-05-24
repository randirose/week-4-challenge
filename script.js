var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var questions = [{
    question1: "What is not a parameter of an event listener?",
    correctAnswer1: "button",
    incorrectAnswers1: ["type", "listener", "options"]
}, {
    question2: "What must you call on JSON in order to store an object to local storage?",
    correctAnswer2: ".stringify",
    incorrectAnswers2: [".parse", ".click", ".store"]
},
{
    question3: "What must you call on JSON in order to retrieve an object from local storage?",
    correctAnswer3: ".parse",
    incorrectAnswers3: [".stringify", ".click", ".store"]
},
{
    question4: "What must you call on the document in order to create an element?",
    correctAnswer4: ".createElement",
    incorrectAnswers4: [".appendChild", ".click", ".create"]
},
{
    question5: "What must you call on the document in order to add an element to the DOM?",
    correctAnswer5: ".appendChild",
    incorrectAnswers5: [".createElement", ".add", ".DOM"]
}];
var questionTitle = document.createElement("h2");
questionTitle.setAttribute('id', 'question-title');
var questionAnswers = document.createElement("ul");
var questionCorrect = document.createElement("button");
questionCorrect.setAttribute('id', 'correct');
var questionWrong1 = document.createElement("button");
var questionWrong2 = document.createElement("button");
var questionWrong3 = document.createElement("button");
var displayResultText = document.createElement("p");
var resultsForm = document.createElement("form");
resultsForm.setAttribute('id', 'form');
var resultsNameInput = document.createElement("input");
resultsNameInput.type = "text";
var resultsInputScore = document.createElement("p");
var resultsHeader = document.createElement("h3");
var resultsSave = document.createElement("button");
questionCorrect.setAttribute('class', 'button');
questionWrong1.setAttribute('class', 'button');
questionWrong2.setAttribute('class', 'button');
questionWrong3.setAttribute('class', 'button');
resultsSave.setAttribute('id', 'save-button');
resultsNameInput.setAttribute('id', 'name-input');
displayResultText.setAttribute('id', 'result-text')
var quizContainer = document.getElementById('questions-answers');
// var mainContainer = document.querySelector(".container");

startButton.addEventListener("click", showQuestion);
startButton.addEventListener("click", clearCount);
startButton.addEventListener("click", function() {
    var secondsLeft = 60;
    function startTimer(){
        var gameTimer = setInterval(function(){
            secondsLeft--;
            timer.textContent="Time remaining: "+secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(gameTimer);
                timer.textContent="TIME UP!";
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
   
};


function showQuestion2() {
    setTimeout(()=> {
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[1].question2;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[1].incorrectAnswers2[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[1].incorrectAnswers2[1];
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[1].correctAnswer2;
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
 
    },2000);
};


function showQuestion3() {
    setTimeout(()=> {
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[2].question3;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[2].incorrectAnswers3[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[2].incorrectAnswers3[1];
    questionAnswers.appendChild(questionWrong3);
    questionWrong3.textContent = questions[2].incorrectAnswers3[2];
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[2].correctAnswer3;
    questionCorrect.addEventListener("click", showQuestion4);
    questionWrong1.addEventListener("click", showQuestion4);
    questionWrong2.addEventListener("click", showQuestion4);
    questionWrong3.addEventListener("click", showQuestion4);
    questionWrong1.addEventListener("click", displayResultWrong);
    questionWrong2.addEventListener("click", displayResultWrong);
    questionWrong3.addEventListener("click", displayResultWrong);
    questionCorrect.addEventListener("click", displayResultRight);
    document.body.appendChild(displayResultText);
   
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
    
},2000);
};

function showQuestion5() {
    setTimeout(()=> {
    document.body.appendChild(questionTitle);
    questionTitle.textContent = questions[4].question5;
    document.body.appendChild(questionAnswers);
    questionAnswers.appendChild(questionWrong1);
    questionWrong1.textContent = questions[4].incorrectAnswers5[0];
    questionAnswers.appendChild(questionWrong2);
    questionWrong2.textContent = questions[4].incorrectAnswers5[1];
    questionAnswers.appendChild(questionCorrect);
    questionCorrect.textContent = questions[4].correctAnswer5;
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
    questionTitle.remove();
    questionAnswers.remove();
    questionAnswers.removeChild(questionCorrect);
    questionAnswers.removeChild(questionWrong1);
    questionAnswers.removeChild(questionWrong2);
    questionAnswers.removeChild(questionWrong3);
    
    
    
    // add form to submit results
    document.body.appendChild(resultsForm);
    resultsForm.appendChild(resultsHeader);
    resultsHeader.textContent = "Enter your name below to save your score!"

    
    resultsForm.appendChild(resultsInputScore);
    resultsInputScore.innerHTML = "You got " + count + " questions right! Awesome job!"
   
    
    resultsForm.appendChild(resultsNameInput);
    resultsForm.appendChild(resultsSave);
    resultsSave.textContent = "Save My Score!"
    
  
    
    resultsSave.addEventListener("click", function(){
        var savedScores = JSON.parse(localStorage.getItem('userInput')) || []
        var userInput = {
        name: resultsNameInput.value,
        score: count,
        }
      savedScores.push(userInput)
      localStorage.setItem('userInput', JSON.stringify(savedScores))
});
resultsSave.addEventListener("click", function(event){
    event.preventDefault();
    var linkEl = document.getElementById('hidden-link');
    resultsForm.appendChild(linkEl);
    linkEl.style.display = 'block';
});
    
},2000);
};

