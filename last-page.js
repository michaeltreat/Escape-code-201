'use strict';

var formEl = document.getElementById('credit-form');
console.log(formEl);

formEl.addEventListener('submit', sendToNextPage);

function sendToNextPage(event) {
  event.stopPropagation();
  event.preventDefault();
  location.href = 'index.html';
  // location.href = 'about.html';
}
