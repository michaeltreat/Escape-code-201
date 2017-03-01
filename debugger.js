'use strict';

var links = [
  'assets/RanGGuup.mp4',
  'assets/itsonlyagame.mp4',
  'assets/NOTjcbis.webm'
];

function youAreGettingCloser(x,y,z){
  if( x, y, z === x)

    console.log('success');
}
youAreGettingCloser( 1,1,1);

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
