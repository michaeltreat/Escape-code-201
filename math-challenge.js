'use strict';

// test function to prepare us for html page.

var banana = 3;
var wizardHat = 5;

var broom = wizardHat;
var peel = banana;

function riddleMeThis(x ,y){
  var number = x + y;
  return number;
}

var broom = wizardHat;
var peel = banana;
var answerToRiddle = riddleMeThis(broom, peel );

var formEl = document.getElementById('answer-form');

formEl.addEventListener('submit', checkAnswer);

function checkAnswer(event){
  event.stopPropagation();
  event.preventDefault();

  var userInput = parseInt(formEl.userInput.value);
  console.log(userInput);
  if( userInput === answerToRiddle){
    location.href = 'index.html'; // place-holder
  }else {
    alert('incorrect');
  };
}
