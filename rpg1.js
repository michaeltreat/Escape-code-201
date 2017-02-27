'use strict';

var questionOne = 'What is a "for" loop?';
var answerOne = 'to count things';
var answerOneIncorrectOne = 'testing321';
var answerOneIncorrectTwo = 'testing123';

var questionTwo = 'What is the meaning of life?';
var answerTwo = 'something stupid';

var questionThree = '';
var answerThree = 'your mom';

// Handle correct answer click
function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

  if (event.target.parentNode.id = 'correctAnswer');

};

// Question One
var questionOneEl = function() {
  var questionEl = document.getElementById('question');
  question.textContent = questionOne;

  var answerEl = document.getElementById('possibleAnswers');

  var answerOneEl = document.createElement('li');
  answerEl.appendChild(answerOneEl);
  answerOneEl.textContent = answerOne;

  var answerTwoEl = document.createElement('li');
  answerEl.appendChild(answerTwoEl);
  answerTwoEl.textContent = answerOneIncorrectOne;

  var answerThreeEl = document.createElement('li');
  answerEl.appendChild(answerThreeEl);
  answerThreeEl.textContent = answerOneIncorrectTwo;

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



questionOneEl();
