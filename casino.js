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

}

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
}
function handleClick(event){
  leverClicks++;
  console.log(leverClicks);
  drawThree();
  console.log('handleClick left ', slotLeft);
  console.log('handleClick center ', slotCenter);
  console.log('handleClick right ', slotRight);
  if (slotLeft === slotRight && slotLeft === slotCenter && slotRight === slotCenter) {
    var paragraghEl = document.getElementById('win');
    var winMessage = 'You Win! You spent ' + (leverClicks * 100) + ' dollars to get this link';
    paragraghEl.textContent = winMessage;
    var linkEl = document.getElementById('nextLink');
    linkEl.textContent = 'Next Stage';
    linkEl.href = 'last-page.html';
    leverEl.removeEventListener('click', handleClick);
    console.log(linkEl);
    console.log('you win! you spent ' + (leverClicks * 100) + ' dollars');
  }
}

//slotLeft === slotMachinePics[0] && slotCenter === slotMachinePics[0] && slotRight === slotMachinePics[0]
