'use strict';

// This will ask the user for their name and store it in local store;

var userName = prompt('Welcome to Escape Code 201! Your goal is to make it to the end of the page! Please enter your name!');
console.log(userName);

while(userName.length < 1){
  alert('Oops. Sorry, you must enter a name!');
  userName = prompt('Please enter your name!');
}

alert('Thanks ' + userName + '. Good luck...');
localStorage.userName = JSON.stringify(userName);
console.log(localStorage.userName);
