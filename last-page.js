'use strict';

var formEl = document.getElementById('credit-form');
console.log(formEl);

formEl.addEventListener('submit', sendToNextPage);

function sendToNextPage(event) {
  event.stopPropagation();
  event.preventDefault();
  alert('Congrats ' + userName + ' you did it. On to the next level. Good luck!');
  location.href = 'about-us.html';
  // location.href = 'about.html';
}
