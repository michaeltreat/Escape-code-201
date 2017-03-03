'use strict';

// This will check if userName exsists. if it does, then userName is what is in local storage. Else it will ask them for it again.
var userName;

if(localStorage.userName){
  // console.log('the username in local storage is : ', localStorage.userName);
  userName = JSON.parse( localStorage.userName);
}else{
  userName = prompt('Hmmmm looks like we forgot your name. What was it again?');
  localStorage.userName = JSON.stringify(userName);
};
