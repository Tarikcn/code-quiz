// questions for the timed quiz
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<javascript>", "<scripting>", "<script>", "<js>"],
    correctAnswer: 2,
  },
  {
    question: "How do you print 'Hello World' in an alert box?",
    answers: [
      "alertBox('Hello World')",
      "msgBox('Hello World')",
      "msg('Hello World')",
      "alert('Hello World')",
    ],
    correctAnswer: 3,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: ["if i==5 then", "if i=5", "if i=5 then", "if (i==5)"],
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answers: ["Position", "Window", "Standard", "Location"],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following is true about variable naming conventions in JavaScript?",
    answers: [
      "JavaScript variable names must begin with a letter or the underscore character",
      "JavaScript variable names are case sensitive",
      "Both of the above",
      "None of the above",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    answers: ["last()", "put()", "push()", "None of the above"],
    correctAnswer: 2,
  },
  {
    question: "Which code below will save to localStorage?",
    answers: [
      "localStorage = 'key' + 'value';",
      "localStorage.getItem(key, value);",
      "localStorage.setItem(key, value);",
      "setItem(localStorage, key, value);",
    ],
    correctAnswer: 2,
  },

  {
    question: "How do you access indices of an array?",
    answers: [
      "Dot notation - MyArray.2",
      "Square brackets - MyArray[2]",
      "Ampersands - MyArray&&2",
      "Equals symbol - MyArray = 2",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Whats the difference between using == and === when comparing two values?",
    answers: [
      "Using === is better than using == because there's more of them",
      "== compares the values and types, === compares the values only",
      "They are not used, only = is used to compare values",
      "== compares the values only, === compares the values and types",
    ],
    correctAnswer: 3,
  },
  {
    question: "What would myVariable++ do?",
    answers: [
      "Add 1 to myVariable",
      "Make a copy of myVariable",
      "Doubles the value of myVariable",
      "Makes myVariable equal to 0",
    ],
    correctAnswer: 0,
  },
];
