var startButton = document.querySelector("#start-btn");
var timer = 60;
var questionContainerEl = document.querySelector("#question-container");
var timerEl = document.querySelector("#timer");
timerEl.textContent = timer;

// once user clicks start button the quiz will start
startButton.addEventListener("click", function() {
    countdown();
});

var countdown = function() {
    // timer will start running and be displayed to user
    var timerCountdown = setInterval(function() {
        timer--;
        timerEl.textContent = timer;
        displayQuestions();

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
    var questionEl = document.createElement("div");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    for (var i = 0; i < questionArray.length; i++){
        questionEl.textContent = questionArray[i].question;
        li1.textContent = questionArray[i].answer1;
        li2.textContent = questionArray[i].answer2;
        li3.textContent = questionArray[i].answer3;
        li4.textContent = questionArray[i].answer4;
    }
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    questionEl.appendChild(listEl);
    questionContainerEl.appendChild(questionEl);
};

// questions will appear with multiple choices

// when user selects correct answer, a brief "hooray" message will appear

// when user selects incorrect answer, a brief "not correct" message will appear

// when all the questions are answered OR the timer expires the time remaining becomes the score

// array of quiz question objects
var questionArray = [
    {
        question: "What European League does Liverpool play in?",
        answer1: "1. Serie A",
        answer2: "2. Bundesliga",
        answer3: "3. La Liga",
        answer4: "4. English Premier League"
    }
]