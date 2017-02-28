'use strict';

// changing for changings sake

// var userName;
//
// if(localStorage.userName){
//   console.log(localStorage.userName);
//   userName = JSON.parse(localStorage.userName);
// }else{
//   userName = prompt('Hmmmm looks like we forgot your name. What was it again?');
//   localStorage.userName = userName;
// };

var pageLink = 'casino.html'; //insert link for quiz completion

var incorrectNumber = 0; //number of incorrect answers

var answerEl = document.getElementById('possibleAnswers'); //correct answer for event listener

// Question One Variables
var questionOne = 'What is a "for" loop?';
var answerOne = 'to count things';
var answerOneIncorrectOne = 'testing321';
var answerOneIncorrectTwo = 'testing123';

// Question Two Variables
var questionTwo = 'What is the meaning of life?';
var answerTwo = 'answer two';
var answerTwoIncorrectOne = '22222incorrect answer one22222';
var answerTwoIncorrectTwo = '222222incorrect answer two22222';

// Question Three Variable
var questionThree = 'Question Three';
var answerThree = 'your mom';
var answerThreeIncorrectOne = '333333 incorrect answer one33333';
var answerThreeIncorrectTwo = '333333 incorrect answer two33333';

// Question Four Variable
var questionFour = 'Question Four';
var answerFour = 'answer four';
var answerFourPicOne = 'assets/hellokitty.jpg';
var answerFourPicTwo = 'assets/hellokitty.jpg';
var answerFourPicThree = 'assets/hellokitty.jpg';

// total questions wrong and messages

var questionsWrong = function () {
  if (incorrectNumber < 2) {
    confirm('you passed');
  } else if (incorrectNumber > 2 && incorrectNumber < 4) {
    confirm('you passed. BARELY!');
  } else {
    confirm('You got ' + incorrectNumber + ' wrong.  YOU FAIL!!');
  }
};

// Handle correct answer click
function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

  console.log(event.target);

  if (event.target.id === 'correctAnswerOne') {
    questionTwoEl();
  } else if (event.target.id === 'correctAnswerTwo') {
    questionThreeEl();
  } else if (event.target.id === 'correctAnswerThree') {
    questionFourEl();
  } else if (event.target.id === 'correctAnswerFour') {
    questionsWrong();
    location.href = pageLink;
  } else {
    incorrectNumber++;
    console.log(incorrectNumber);
    confirm('You got it wrong fool. Pick again');
  }
};

// Question One
var questionOneEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionOne;

  var questionOneAnswerOneEl = document.createElement('li');
  questionOneAnswerOneEl.setAttribute('id', 'correctAnswerOne');
  answerEl.appendChild(questionOneAnswerOneEl);
  questionOneAnswerOneEl.textContent = answerOne;
  questionOneAnswerOneEl.addEventListener('click', handleClick);

  var questionOneAnswerTwoEl = document.createElement('li');
  questionOneAnswerTwoEl.setAttribute('id', 'incorrectAnswerOne');
  answerEl.appendChild(questionOneAnswerTwoEl);
  questionOneAnswerTwoEl.textContent = answerOneIncorrectOne;
  questionOneAnswerTwoEl.addEventListener('click', handleClick);

  var questionOneAnswerThreeEl = document.createElement('li');
  questionOneAnswerThreeEl.setAttribute('id', 'incorrectAnswerTwo');
  answerEl.appendChild(questionOneAnswerThreeEl);
  questionOneAnswerThreeEl.textContent = answerOneIncorrectTwo;
  questionOneAnswerThreeEl.addEventListener('click', handleClick);

};

// Question Two

var questionTwoEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionTwo;

  var questionTwoAnswerOneEl = document.getElementById('correctAnswerOne');
  questionTwoAnswerOneEl.setAttribute('id', 'incorrectAnswerOne');
  answerEl.appendChild(questionTwoAnswerOneEl);
  questionTwoAnswerOneEl.textContent = answerTwoIncorrectOne;
  questionTwoAnswerOneEl.addEventListener('click', handleClick);

  var questionTwoAnswerTwoEl = document.getElementById('incorrectAnswerOne');
  questionTwoAnswerTwoEl.setAttribute('id', 'correctAnswerTwo');
  answerEl.appendChild(questionTwoAnswerTwoEl);
  questionTwoAnswerTwoEl.textContent = answerTwo;
  questionTwoAnswerTwoEl.addEventListener('click', handleClick);

  var questionTwoAnswerThreeEl = document.getElementById('incorrectAnswerTwo');
  questionTwoAnswerThreeEl.setAttribute('id', 'incorrectAnswerTwo');
  answerEl.appendChild(questionTwoAnswerThreeEl);
  questionTwoAnswerThreeEl.textContent = answerTwoIncorrectTwo;
  questionTwoAnswerThreeEl.addEventListener('click', handleClick);

};

// Question Three

var questionThreeEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionThree;

  var questionThreeAnswerOneEl = document.getElementById('incorrectAnswerTwo');
  questionThreeAnswerOneEl.setAttribute('id', 'incorrectAnswerOne');
  answerEl.appendChild(questionThreeAnswerOneEl);
  questionThreeAnswerOneEl.textContent = answerThreeIncorrectOne;
  questionThreeAnswerOneEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionThreeAnswerTwoEl = document.getElementById('incorrectAnswerOne');
  questionThreeAnswerTwoEl.setAttribute('id', 'incorrectAnswerTwo');
  answerEl.appendChild(questionThreeAnswerTwoEl);
  questionThreeAnswerTwoEl.textContent = answerThreeIncorrectTwo;
  questionThreeAnswerTwoEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionThreeAnswerThreeEl = document.getElementById('correctAnswerTwo');
  questionThreeAnswerThreeEl.setAttribute('id', 'correctAnswerThree');
  answerEl.appendChild(questionThreeAnswerThreeEl);
  questionThreeAnswerThreeEl.textContent = answerThree;
  questionThreeAnswerThreeEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

};

 // Question Four

var questionFourEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionFour;

  var questionFourAnswerOneEl = document.createElement('img');
  document.getElementById('incorrectAnswerTwo').remove();
  questionFourAnswerOneEl.setAttribute('src', answerFourPicOne);
  questionFourAnswerOneEl.setAttribute('class', 'image');
  answerEl.appendChild(questionFourAnswerOneEl);
  questionFourAnswerOneEl.textContent = answerThreeIncorrectOne;
  questionFourAnswerOneEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionFourAnswerTwoEl = document.createElement('img');
  document.getElementById('incorrectAnswerOne').remove();
  questionFourAnswerTwoEl.setAttribute('src', answerFourPicTwo);
  questionFourAnswerTwoEl.setAttribute('class', 'image');
  answerEl.appendChild(questionFourAnswerTwoEl);
  questionFourAnswerTwoEl.textContent = answerThreeIncorrectTwo;
  questionFourAnswerTwoEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionFourAnswerThreeEl = document.createElement('img');
  document.getElementById('correctAnswerThree').remove();
  questionFourAnswerThreeEl.setAttribute('src', answerFourPicThree);
  questionFourAnswerThreeEl.setAttribute('class', 'image');
  answerEl.appendChild(questionFourAnswerThreeEl);
  questionFourAnswerThreeEl.textContent = answerFour;
  questionFourAnswerThreeEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

};

questionOneEl();
