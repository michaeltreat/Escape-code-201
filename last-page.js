'use strict';

var formEl = document.getElementById('credit-form');
console.log(formEl);

formEl.addEventListener('submit', sendToNextPage);

function sendToNextPage(event) {
  event.stopPropagation();
  event.preventDefault();
  alert('Congrats ' + userName + ' you are the proud owner of our DLC. On to the next level. Good luck, you need it!');
  location.href = 'debugger.html';
  // location.href = 'about.html';
}
