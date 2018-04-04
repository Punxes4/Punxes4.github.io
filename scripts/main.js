var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ues.jpg') {
      myImage.setAttribute ('src','images/ball.png');
    } else {
      myImage.setAttribute ('src','images/ues.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Visca la UES, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Visca la UES, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }