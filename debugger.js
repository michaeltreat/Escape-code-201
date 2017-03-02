'use strict';

console.log('step one : Fix audio');
var moneySpent;
var uniqueCode;
var links = [
  'assets/RanGGuup.mp4',
  'assets/itsonlyagame.mp4',
  'assets/NOTjcbis.webm'
];
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
    console.log('Great. Now it is time to fix the video');
  }else{
    console.log('Sorry, that is incorrect. Try again!;');
  }
}

function runCharts(){
  var ctx = document.getElementById('current-chart').getContext('2d');

  var chartData = {
    type:'bar',
    data:{
      labels: names,
      datasets:[{
        label:'# of Votes',
        data: cumulativeClicks,
        backgroundColor : 'blue'
      },
      {
        label:'# of Views',
        data: cumulativeViews,
        backgroundColor : 'red'
      }]
    },
    options:{
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero: true
          }
        }]
      }
    }
  };
  var myChart = new Chart(ctx, chartData);
}
