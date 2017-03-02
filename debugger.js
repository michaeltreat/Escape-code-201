'use strict';

console.log('step one : Fix audio');
var moneySpent;
var uniqueCode;
var links = [
  'assets/RanGGuup.mp4',
  'assets/itsonlyagame.mp4',
  'assets/NOTjcbis.webm'
];
function generateRandomNumber(){
  return Math.floor(Math.random() * 100);
}
var formEl = document.getElementById('form');

formEl.addEventListener('submit', handleData);

function handleData(event){
  event.stopPropagation();
  event.preventDefault();

  var usersAnswer = parseInt(event.target.userInput.value);

  // console.log('userInput type' ,typeof(userInput));
  // console.log(userInput);

  if (isNaN(usersAnswer)){
    alert('You must enter a number! Try Again!');
  }else{
    // console.log(userInput);
    checkLocalStorage();
    youAreGettingCloser(usersAnswer);
    localStorage.secretNumber = JSON.stringify(generateRandomNumber());

  }
};

function checkLocalStorage(){
  if(localStorage.moneySpent){
    moneySpent = JSON.parse(localStorage.moneySpent);
    // console.log('money spent', moneySpent);
    // console.log('user name', userName);
  }else{
    // console.log( 'LS.moneySpent was false ' , localStorage.moneySpent);
    alert('We are missing your total money spent on the slots game, so we reset the total you spent to $837');
    localStorage.moneySpent = JSON.stringify(837);
  }
}

function youAreGettingCloser(userInput){
  uniqueCode = moneySpent * userName.length;
  if(uniqueCode === userInput){
    console.log('Great, that definetely worked. Now it is time to fix the video. This may help you: putVideoUrlTogether(uniqueCode,secretLocalStorageNumber)');

  }else{
    console.log('Sure... That kinda sounds right I guess. Next step is to fix the video! This may help you: pickVideoUrl()');
  }
}

function putVideoUrlTogether(x,y){
  var secretLocalStorageNumber = JSON.parse(localStorage.secretNumber);
  var videoCode = uniqueCode + secretLocalStorageNumber;
  var funcParas = x + y;
  if(videoCode = funcParas){
    console.log('You found the one true link. assets/tempName.mp3');
  }else{
    console.log('You were so close. Check localStorage for a hint. Try calling this function again with but use different numbers.');
  }

}

function pickVideoUrl(){
  var index = Math.floor(Math.random() * links.length);
  var link = links[index];
  console.log('Try this one:' , link);
}
