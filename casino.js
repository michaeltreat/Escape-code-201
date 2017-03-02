'use strict';

//slot machine picture value
var slotLeft = 0;
var slotCenter = 0;
var slotRight = 0;

//stores number of clicks of lever
var leverClicks = 0;

//element nodes for img tags
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var leverEl = document.getElementById('lever');
leverEl.addEventListener('click', handleClick);

//constructor for slot machine pictures
function slotPic (slotPath, name){
  this.slotPath = slotPath;
  this.name = name;

};

//Slot machine pictures
var slotCherry = new slotPic('slotpics/cherry.png', 'Cherry');
var slotLemon = new slotPic('slotpics/lemon.png','Lemon');
var slotDiamond = new slotPic('slotpics/diamond.png','Lemon');

//Slot Machine picture array
var slotMachinePics = [slotCherry,slotLemon,slotDiamond];
console.log(slotMachinePics);

//Random number generator
function randomSpin(){
  return Math.floor(Math.random() * slotMachinePics.length);
};

//set random numbers to item variables
function drawThree(){
  slotLeft = randomSpin();
  slotCenter = randomSpin();
  slotRight = randomSpin();

  console.log('drawThree left ', slotLeft);
  console.log('drawThree center ', slotCenter);
  console.log('drawThree right ', slotRight);

  //sets img source for img tags
  var leftSlot = slotMachinePics[slotLeft];
  left.setAttribute('src', leftSlot.slotPath);

  var centerSlot = slotMachinePics[slotCenter];
  center.setAttribute('src', centerSlot.slotPath);

  var rightSlot = slotMachinePics[slotRight];
  right.setAttribute('src',rightSlot.slotPath);
};

function handleClick(event){
  leverClicks++;
  console.log(leverClicks);
  drawThree();
  if (slotLeft === 0 && slotCenter === 0 && slotRight === 0) {
    var paragraghEl = document.getElementById('win');
    var winMessage = 'You Win! ' + userName + ', you spent ' + (leverClicks * 76) + ' dollars to get this link...ouch.';
    //local storage
    localStorage.moneySpent = JSON.stringify(leverClicks);
    console.log(localStorage.moneySpent);

    //paragraph element for win message
    paragraghEl.textContent = winMessage;

    //a tag element for link to next page
    var linkEl = document.getElementById('nextLink');
    linkEl.textContent = 'Next Stage';
    linkEl.href = 'last-page.html';
    leverEl.removeEventListener('click', handleClick);
    console.log(linkEl);
    console.log('you win! you spent ' + (leverClicks * 76) + ' dollars');
  }else if(slotLeft === 1 && slotCenter === 1 && slotRight === 1){
    var paragraghEl = document.getElementById('win');
    var winMessageTwo = userName + ', life gave you lemons. And those lemons cost ' + (leverClicks * 76) + ' dollars.';
    //local storage
    localStorage.moneySpent = JSON.stringify(leverClicks);
    console.log(localStorage.moneySpent);

    //paragraph element for win message
    paragraghEl.textContent = winMessageTwo;

    //a tag element for link to next page
    var linkEl = document.getElementById('nextLink');
    linkEl.textContent = 'Next Stage';
    linkEl.href = 'last-page.html';
    leverEl.removeEventListener('click', handleClick);
  }else if(slotLeft === 2 && slotCenter === 2 && slotRight === 2){
    var paragraghEl = document.getElementById('win');
    var winMessageThree = userName + ', you shine bright like a diamond. A ' + (leverClicks * 76) + ' dollar diamond.';
    //local storage
    localStorage.moneySpent = JSON.stringify(leverClicks);
    console.log(localStorage.moneySpent);

    //paragraph element for win message
    paragraghEl.textContent = winMessageThree;

    //a tag element for link to next page
    var linkEl = document.getElementById('nextLink');
    linkEl.textContent = 'Next Stage';
    linkEl.href = 'last-page.html';
    leverEl.removeEventListener('click', handleClick);
  }
};
