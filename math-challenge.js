'use strict';

// test function to prepare us for html page.

var formEl = document.getElementById('answer-form');
var banana = 3;
var wizardHat = 5;

var broom = wizardHat;
var peel = banana;

function riddleMeThis(x ,y){
  if ( x < 20){
    var number = x + y;
    return number;
  }else if( x === 2){
    var number = x * y;
    return number;
  }else if(y === x){
    var number = x / y;
    return number;
  }else{
    return banana;
  }
}

var answerToRiddle = riddleMeThis(broom, peel );

formEl.addEventListener('submit', checkAnswer);

function checkAnswer(event){
  event.stopPropagation();
  event.preventDefault();

  var userInput = parseInt(formEl.userInput.value);
  console.log(userInput);
  if( userInput === answerToRiddle){
    location.href = 'rpg1.html'; // place-holder
  }else {
    alert('incorrect');
  };
}
