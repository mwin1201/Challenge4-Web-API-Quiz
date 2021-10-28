var startButton = document.querySelector("#start-btn");
var timer = 60;
var questionContainerEl = document.querySelector("#question-container");

// once user clicks start button the quiz will start
startButton.addEventListener("click", function() {

});
// timer will start running and be displayed to user
var timerCountdown = setInterval(function() {
    return timer--;
}, 1000);

// questions will appear with multiple choices

// when user selects correct answer, a brief "hooray" message will appear

// when user selects incorrect answer, a brief "not correct" message will appear

// when all the questions are answered OR the timer expires the time remaining becomes the score

// user is presented to save their name/initials to LocalStorage high scores

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