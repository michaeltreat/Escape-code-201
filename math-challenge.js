'use strict';

// test function to prepare us for html page.

var x = 3;
var y = 5;

function riddleMeThis(x ,y){
  var number = x + y;
  return number;
}

var answerToRiddle = answer(x, y);

if( 7 === answerToRiddle){
  location.href = 'index.html'; // place-holder
}else {
  alert('incorrect');
};
