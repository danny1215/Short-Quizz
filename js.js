console.log("am i connected");
// declaration of variable of ids and classes
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var timers = document.getElementById("time-left");
var button = document.getElementById("saveResultBtn");
var currentQuestion = {};
var accepingAnswers = true;
var score = [];
var questionCounter = 0;
var availableQuestions = [];
// questions array
var questions =[
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1:"<script>",
    choice2:"<scripting>",
    choice3:"<javascipt>",
    choice4:"<js>",
    answer: 1

  },
  {
    question: "What does CSS stand for?",
    choice1:"Creating style sheets",
    choice2:"Colorfull style sheets",
    choice3:"Computer style sheets",
    choice4:"cascading style sheets",
    answer: 4

  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    choice1:"Styles",
    choice2:"font",
    choice3:"Class",
    choice4:"style",
    answer: 3

  },
  {
    question: "How do you insert a comment in a CSS file?",
    choice1:"'this is a comment'",
    choice2:"//this is a comment",
    choice3:"/*this is a comment*/",
    choice4:"//this is a comment//",
    answer: 3

  },
  {
    question: "Which CSS property controls the text size?",
    choice1:"font-size",
    choice2:"text-style",
    choice3:"text-size",
    choice4:"font-style",
    answer: 1

  },
]
// constant 
const max_questions = 5;
  var timing = 20;
  // timer for the Quiz
   var startquiz = function() {
      var timer = setInterval(function(){
        timers.innerHTML = timing;
        timing--;
        if(timing===0){
          clearInterval(timer);
          return window.location.assign("./final.html");
          }
      },1000);
    // start question counter from 0
      questionCounter = 0;
      score = 0;
      
      // shorter way of writing an array of questions to the new declaration of new var(availableQuestions)

      availableQuestions =[...questions];
      
      getNewQuestion();
  };
// function getNewQuestion
    var getNewQuestion = function(){
        if (availableQuestions.length ===0 || questionCounter >= max_questions  ) {

        // if end of available questions the go to new page (end of quizz page)
          return window.location.assign("./final.html");
        }
         questionCounter++;
      //  i choose to use a random  questions so it will not repeat the same thing everytime we play the quiz
        var questionIndex = Math.floor(Math.random() * availableQuestions.length);
       
        var currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
        // for each statment
        choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
      });
      availableQuestions.splice(questionIndex, 1);
      acceptingAnswers = true;
    };
    // for each statment
      choices.forEach(choice => {
      choice.addEventListener("click", function(e) {
        e.preventDefault();
        if(!acceptingAnswers) return;
// this is me trying to target the selected choices with selected answers
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        
        getNewQuestion();
       });
      });

// envoking of the function startquiz
  startquiz();