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

// Question One Variables
var questionOne = 'What is a "for" loop?';
var answerOne = 'to count things';
var answerOneIncorrectOne = 'testing321';
var answerOneIncorrectTwo = 'testing123';

<<<<<<< HEAD
// Question Two Variables
var questionTwo = 'What is the meaning of life?';
var answerTwo = 'something stupid';

// Question Three Variable
=======
var questionTwo = 'What is the meaning of life?';
var answerTwo = 'something stupid';

>>>>>>> b15cce57f2dd1791f798aee8f1ace087ce5c9a0f
var questionThree = '';
var answerThree = 'your mom';

// Handle correct answer click
function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

<<<<<<< HEAD
  console.log(event.target);

  if (event.target.id === 'correctAnswer') {
    questionTwoEl();
  }
=======
  if (event.target.parentNode.id = 'correctAnswer');

>>>>>>> b15cce57f2dd1791f798aee8f1ace087ce5c9a0f
};

// Question One
var questionOneEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionOne;

  var answerEl = document.getElementById('possibleAnswers');

  var answerOneEl = document.createElement('li');
  answerOneEl.setAttribute('id', 'correctAnswer');
  console.log(answerOneEl.id);
  answerEl.appendChild(answerOneEl);
  answerOneEl.textContent = answerOne;
  answerOneEl.addEventListener('click', handleClick);

  var answerTwoEl = document.createElement('li');
  answerTwoEl.setAttribute('id', 'incorrectAnswer');
  answerEl.appendChild(answerTwoEl);
  answerTwoEl.textContent = answerOneIncorrectOne;
  answerTwoEl.addEventListener('click', handleClick);

  var answerThreeEl = document.createElement('li');
  answerThreeEl.setAttribute('id', 'incorrectAnswer');
  answerEl.appendChild(answerThreeEl);
  answerThreeEl.textContent = answerOneIncorrectTwo;
  answerThreeEl.addEventListener('click', handleClick);

};

// Question Two

var questionTwoEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionTwo;

};

// Question Three

var questionThreeEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionTwo;
};

<<<<<<< HEAD
=======


>>>>>>> b15cce57f2dd1791f798aee8f1ace087ce5c9a0f
questionOneEl();
