'use strict';

//slot machine picture value
var slotLeft = 0;
var slotCenter = 0;
var slotRight = 0;

var leverClicks = 0;

var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

//constructor for slot machine pictures
function slotPic (slotPath, name){
  this.slotPath = slotPath;
  this.name = name;

}

//Slot machine pictures
var slotCherry = new slotPic('slotpics/cherry.png', 'Cherry');
var slotLemon = new slotPic('slotpics/lemon.png','Lemon');
var slotDiamond = new slotPic('slotpics/diamond.png','Lemon');

var leverEl = document.getElementById('lever');
leverEl.addEventListener('click', handleClick);

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
  if (slotLeft === slotRight && slotLeft === slotCenter) {
    var paragraghEl = document.getElementById('win');
    var winMessage = alert('you win! you spent ' + (leverClicks * 100) + ' dollars and all you got was this link...ouch');
    paragraghEl.textContent = winMessage;
    //location.href = 'rpg1.html';
    console.log('you win! you spent ' + (leverClicks * 100) + ' dollars');
  }else {
    drawThree();
  }
}
