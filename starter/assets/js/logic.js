//define global variables
var timeLeft;
var quizNumber = 0;
var finish = false;
var score;

//get element from html
var startButton = document.querySelector("#start");
var timeSpan = document.querySelector("#time");
var startDiv = document.querySelector(".start");
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var endScreenDiv = document.querySelector("#end-screen");
var finalScoreSpan = document.querySelector("#final-score");
var initialsTextBox = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var correctSound = document.querySelector("audio[data-sound='correct']");
var incorrectSound = document.querySelector("audio[data-sound='incorrect']");
var feedbackDiv = document.querySelector("#feedback");

// sets how long the timer will be
var timer = 75;
// determines if the end of the quiz was reached
var quizFinished = false;
// stores the players score at the end of the quiz
var score = 0;
// keep track of amount of questions answered
var questionCount = 0;
// holds whether the answer to the current question is correct or not
var correctAnswer = false;

// declare the variable now to be used in the setTime function, need to be global to clearInterval in the init function otherwise it won't clear
var timerInterval;
