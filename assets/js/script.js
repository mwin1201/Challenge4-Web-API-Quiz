var startButton = document.querySelector("#start-btn");
var questionContainerEl = document.querySelector("#question-container");
var timerEl = document.querySelector("#timer");
var headerEl = document.querySelector("#header");
var timer = 60;
timerEl.textContent = timer;

// once user clicks start button the quiz will start
startButton.addEventListener("click", function() {
    headerEl.textContent = "";
    startButton.parentElement.removeChild(startButton);
    countdown();
    displayQuestions();
});

var countdown = function() {
    // timer will start running and be displayed to user
    var timerCountdown = setInterval(function() {
        timer--;
        timerEl.textContent = timer;

        if (timer === 0){
            // user is presented to save their name/initials to LocalStorage high scores
            clearInterval(timerCountdown);
            displayHighScores();
        }
    }, 1000);
};

var displayHighScores = function() {

};

var displayQuestions = function() {
    var i = 0;
    //while (i < questionArray.length){
        var questionEl = document.createElement("div");
        var listEl = document.createElement("ol");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
    
        questionEl.textContent = questionArray[i].question;
        button1.textContent = questionArray[i].answer1;
        button2.textContent = questionArray[i].answer2;
        button3.textContent = questionArray[i].answer3;
        button4.textContent = questionArray[i].answer4;
    
        li1.appendChild(button1);
        li2.appendChild(button2);
        li3.appendChild(button3);
        li4.appendChild(button4);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        questionEl.appendChild(listEl);
        questionContainerEl.appendChild(questionEl);
    
        listEl.addEventListener("click", function(event){
            checkAnswer(event.target, questionArray[i].correctAnswer);
            i++;
        })
    //}
};

var checkAnswer = function(userGuess, answer) {
    userGuess = userGuess.innerHTML;
    if (userGuess !== answer) {
        timer = timer - 10;
    }
};

// questions will appear with multiple choices

// when user selects correct answer, a brief "hooray" message will appear

// when user selects incorrect answer, a brief "not correct" message will appear

// when all the questions are answered OR the timer expires the time remaining becomes the score

// array of quiz question objects
var questionArray = [
    {
        question: "What European League does Liverpool play in?",
        answer1: "Serie A",
        answer2: "Bundesliga",
        answer3: "La Liga",
        answer4: "English Premier League",
        correctAnswer: "English Premier League",
        answerStatus: "unknown"
    },
    {
        question: "Who is the manager of Liverpool right now?",
        answer1: "Pep Guardiola",
        answer2: "Ole Gunnar Solskjaer",
        answer3: "Jurgen Klopp",
        answer4: "Brendan Rodgers",
        correctAnswer: "Jurgen Klopp",
        answerStatus: "unknown"
    }
]