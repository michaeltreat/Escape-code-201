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
var questionOneImage = 'assets/hellokitty.jpg';
var questionOne = 'HTML is considered a _________ language.';
var answerOne = 'markup';
var answerOneIncorrectOne = 'foreign';
var answerOneIncorrectTwo = 'programming';

// Question Two Variables
var questionTwo = 'I want to change to text color of all my elements with a class of myStuff.  I would use...';
var answerTwo = '.myStuff';
var answerTwoIncorrectOne = '#myStuff';
var answerTwoIncorrectTwo = 'class.myStuff';

// Question Three Variable
var questionThree = 'Why so JavaScript and Java have similar names?';
var answerThree = 'JavaScript\'s syntax is loosely based on Java\'s';
var answerThreeIncorrectOne = 'JavaScript is a stripped-down version of Java';
var answerThreeIncorrectTwo = 'They both originated on the island of Java';

// Question Four Variable
var questionFour = 'Who is the best TA?';
var answerFour = 'Who is the best TA?';
var answerFourPicOne = 'assets/hellokitty.jpg';
var answerFourPicTwo = 'assets/hellokitty.jpg';
var answerFourPicThree = 'assets/hellokitty.jpg';

// total questions wrong and messages

var questionsWrong = function () {
  if (incorrectNumber < 2) {
    confirm('you passed');
  } else if (incorrectNumber > 2 && incorrectNumber < 4) {
    confirm('you got ' + incorrectNumber + '.' + ' you pass... BARELY!');
  } else {
    confirm('You got ' + incorrectNumber + ' wrong.  YOU FAIL!!');
    confirm('You can move on this time.  Dont expect to be so lucky!');
  }
};

// Handle correct answer click
function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

  console.log(event.target);

    // question one
  if (event.target.id === 'correctAnswerOne') {
    questionTwoEl();
    // question two
  } else if (event.target.id === 'correctAnswerTwo') {
    questionThreeEl();
    // question three
  } else if (event.target.id === 'correctAnswerThree') {
    confirm('Congratulations. You made it to the final question. The next question is worth all the marbles. Answer carefully...');
    questionFourEl();
    // question four - images
  } else if (event.target.id === 'image1') {
    confirm('Wow... someone is playing favorites.');
    questionsWrong();
    location.href = pageLink;
  } else if (event.target.id === 'image2') {
    confirm('Really? Wouldnt have guess that.');
    questionsWrong();
    location.href = pageLink;
  } else if (event.target.id === 'image3') {
    confirm('umm... okkay?  I guess?');
    location.href = pageLink;
    // incorrect answer
  } else {
    incorrectNumber++;
    console.log(incorrectNumber);
    confirm('You got it wrong! You have gotten ' + incorrectNumber + ' incorrect. Pick again');
  }
};

var addPic = function() {
  var imageEl = document.getElementById('firstImage');
  imageEl.setAttribute('src', 'assets/traceybobaseybananafanafofacey.JPG');
  imageEl.textContent = 'IMAGE';
};

// correct and incorrect answers need to be called, and replaced (by ID) for every question.

// Question One
confirm('You wake up... classroom is empty... you need to find a way out of here.');

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
  var imageEl = document.getElementById('firstImage');
  imageEl.setAttribute('src', 'assets/frazierreal.jpg');
  imageEl.textContent = 'TESTING';

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
  questionThreeAnswerOneEl.setAttribute('id', 'questionThreeIncorrectAnswerOne');
  answerEl.appendChild(questionThreeAnswerOneEl);
  questionThreeAnswerOneEl.textContent = answerThreeIncorrectOne;
  questionThreeAnswerOneEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionThreeAnswerTwoEl = document.getElementById('incorrectAnswerOne');
  questionThreeAnswerTwoEl.setAttribute('id', 'questionThreeIncorrectAnswerTwo');
  answerEl.appendChild(questionThreeAnswerTwoEl);
  questionThreeAnswerTwoEl.textContent = answerThreeIncorrectTwo;
  questionThreeAnswerTwoEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionThreeAnswerThreeEl = document.getElementById('correctAnswerTwo');
  questionThreeAnswerThreeEl.setAttribute('id', 'questionThreeCorrectAnswerThree');
  answerEl.appendChild(questionThreeAnswerThreeEl);
  questionThreeAnswerThreeEl.textContent = answerThree;
  questionThreeAnswerThreeEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

};

 // Question Four

var questionFourEl = function() {
  // delete right side image
  document.getElementById('firstImage').remove();

  var changeTableEl = document.getElementById('possibleAnswers');
  changeTableEl.setAttribute('id', 'questionFourTable');

  var questionEl = document.getElementById('question');
  question.textContent = questionFour;

  var questionFourAnswerOneEl = document.createElement('img');
  document.getElementById('questionThreeIncorrectAnswerTwo').remove();
  questionFourAnswerOneEl.setAttribute('src', answerFourPicOne);
  questionFourAnswerOneEl.setAttribute('id', 'image1');
  answerEl.appendChild(questionFourAnswerOneEl);
  questionFourAnswerOneEl.textContent = answerThreeIncorrectOne;
  questionFourAnswerOneEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionFourAnswerTwoEl = document.createElement('img');
  document.getElementById('questionThreeIncorrectAnswerOne').remove();
  questionFourAnswerTwoEl.setAttribute('src', answerFourPicTwo);
  questionFourAnswerTwoEl.setAttribute('id', 'image2');
  answerEl.appendChild(questionFourAnswerTwoEl);
  questionFourAnswerTwoEl.textContent = answerThreeIncorrectTwo;
  questionFourAnswerTwoEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

  var questionFourAnswerThreeEl = document.createElement('img');
  document.getElementById('questionThreeCorrectAnswerThree').remove();
  questionFourAnswerThreeEl.setAttribute('src', answerFourPicThree);
  questionFourAnswerThreeEl.setAttribute('id', 'image3');
  answerEl.appendChild(questionFourAnswerThreeEl);
  questionFourAnswerThreeEl.textContent = answerFour;
  questionFourAnswerThreeEl.addEventListener('click', handleClick);

  console.log(incorrectNumber);

};

addPic();

questionOneEl();
