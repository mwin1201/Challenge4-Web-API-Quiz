var startButton = document.querySelector("#start-btn");
var questionContainerEl = document.querySelector("#question-container");
var timerEl = document.querySelector("#timer");
var headerEl = document.querySelector("#header");
bodyEl = document.querySelector("#body");
var listEl = document.querySelector("#question-answers-list");
var questionEl = document.querySelector("#question-element");
var timer = 60;
timerEl.textContent = timer;
var questionIndex = 0;
var highscore = 0;
var highscoresArr = [];

var countdown = function() {
    // timer will start running and be displayed to user
    var timerCountdown = setInterval(function() {
        // when timer hits 0 the quiz is over
        if (timer <= 0){
            // user is presented to save their name/initials to LocalStorage high scores
            clearInterval(timerCountdown);
            if (highscore === 0){
                highscore = timer;
                displayHighScores(highscore);
            }
        }
        timer--;
        timerEl.textContent = timer;
    }, 1000);
};

var displayHighScores = function(highscore) {
    alert("You scored: " + highscore + "!");
    bodyEl.textContent = "";
    var highScoreEl = document.createElement("div");
    highScoreEl.className = "highscore-title";
    bodyEl.appendChild(highScoreEl);
    highScoreEl.textContent = "Quiz Highscores";
    var scoreContainer = document.createElement("div");
    scoreContainer.className = "highscore-container";
    var highscoreList = document.createElement("ol");
    // need to write localstorage values into list
    for (var i = 0; i < highscoresArr.length; i++) {
        listEl = document.createElement("li");
        var listObj = loadHighScores(i);
        listEl.textContent = listObj[i].name + ": " + listObj[i].score;
        highscoreList.appendChild(listEl);
        scoreContainer.appendChild(highscoreList);
    }
    nameLabel = document.createElement("label");
    nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameLabel.textContent = "Enter Initials: ";
    scoreContainer.appendChild(nameLabel);
    scoreContainer.appendChild(nameInput);
    highScoreEl.appendChild(scoreContainer);

    nameInput.addEventListener("blur", function() {
        var playerObj = {
            name: nameInput.value,
            score: highscore
        };
        saveScore(playerObj);
    });

};

var loadHighScores = function(index) {
    var scores = localStorage.getItem("Quiz-Game");
    if (!scores) {
        return false;
    }
    scores = JSON.parse(scores);
    return scores[index];
};

var saveScore = function(playerObj) {
    highscoresArr.push(playerObj);
    var scores = localStorage.getItem("Quiz-Game");
    scores = JSON.parse(scores);
    highscoresArr.push(scores);
    localStorage.setItem("Quiz-Game", JSON.stringify(highscoresArr));
};

// function to display the quiz questions for the user
var displayQuestions = function(quizQuestion) {
    // create list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    // create buttons for each list item multiple choice answer
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");

    // populate the new elements with text for the questions and multiple choice answers
    questionEl.textContent = quizQuestion.question;
    button1.textContent = quizQuestion.answer1;
    button2.textContent = quizQuestion.answer2;
    button3.textContent = quizQuestion.answer3;
    button4.textContent = quizQuestion.answer4;

    // add the buttons to each list item
    li1.appendChild(button1);
    li2.appendChild(button2);
    li3.appendChild(button3);
    li4.appendChild(button4);
    // add each list item to the lits element
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    // add the entire list to the question div element
    questionEl.appendChild(listEl);
    // add the question element to the question container
    questionContainerEl.appendChild(questionEl);
};



var checkAnswer = function(userGuess, answer) {
    userGuess = userGuess.innerHTML;
    if (userGuess !== answer) {
        alert("Wrong!");
        timer = timer - 10;
        timerEl.textContent = timer;
    }
    else {
        alert("Correct!");
    }
};

// remove question and answers
var removeQuestion = function() {
    while (listEl.hasChildNodes()) {
        listEl.removeChild(listEl.firstChild);
    }
    questionEl.removeChild(listEl);
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
    },
    {
        question: "Which Liverpool player is from Egypt?",
        answer1: "Virgil van Dijk",
        answer2: "Sadio Mane",
        answer3: "Mohamed Salah",
        answer4: "Divock Origi",
        correctAnswer: "Mohamed Salah",
        answerStatus: "unknown"
    },
    {
        question: "Which Liverpool player scored their 100th Premier League goal this season?",
        answer1: "Sadio Mane",
        answer2: "Mohamed Salah",
        answer3: "Christiano Ronaldo",
        answer4: "Lionel Messi",
        correctAnswer: "Sadio Mane",
        answerStatus: "unknown"
    },
    {
        question: "Liverpool defeated which team 4-0 in 2019 to reach the Champions League finals?",
        answer1: "Manchester City",
        answer2: "Barcelona",
        answer3: "Bayern Munich",
        answer4: "Manchester United",
        correctAnswer: "Barcelona",
        answerStatus: "unknown"
    }
]


// once user clicks start button the quiz will start
startButton.addEventListener("click", function() {
    headerEl.textContent = "";
    startButton.parentElement.removeChild(startButton);
    countdown();
    displayQuestions(questionArray[questionIndex]);
});

listEl.addEventListener("click", function(event){
    checkAnswer(event.target, questionArray[questionIndex].correctAnswer);
    while (questionIndex < questionArray.length) {
        removeQuestion();
        questionIndex++;
        if (questionIndex > questionArray.length - 1){
            break;
        }
        return displayQuestions(questionArray[questionIndex]);
    }
    highscore = timer;
    displayHighScores(highscore);
    timer = 0;
});