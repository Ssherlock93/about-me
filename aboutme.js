'use strict';

var wrong, correct, incorrect;
wrong = ('That\'s not what I was looking for... Try Yes or No');
correct = 0;
console.log('correct', correct);
console.log('incorrect', incorrect);

var userName = prompt('Hello, what is your name?');
console.log('userName', userName);


//height question .
//Use this question and wrap it in a function.
//Function is called heightAnswer()
//Function input is what user types in box (in order to call the function). This has to be a numeric value.

function questionOne() {

  var userHeight = prompt('Hi, ' + userName + '. How tall are you? (in inches)');
  if (userHeight > 72) {
    alert('That is so tall!');
  }
  if (userHeight <= 72) {
    alert('That\'s about average');
  } else if (userHeight < 60) {
    alert('I am sorry to hear that');
  }
  console.log('userHeight', userHeight);
}

questionOne();






// // content with height question

function questionTwo() {
  prompt('Answer the following questions with Yes or No ');
  var userHappy = prompt('Well, ' + userName + ', Are you happy with your height?');
  if (userHappy === 'Yes') {
    alert('That is great to hear');
    correct++;
  } else if (userHappy === 'No') {
    alert('Well, there isn\'t much you can do about it');
    incorrect++;
  } else {
    alert(wrong);
  }
  console.log('userHappy', userHappy);
  
}

questionTwo();



// car questions

function questionThree() {
  var userCars = prompt(userName + ',Do you like cars?');
  while (userCars !== 'Yes') {
    userCars = prompt(wrong);
    correct++;
    break;

  }
  if (userCars === 'No') {
    alert('There must be something else that intersts you then');
    incorrect++;
  } else {
    alert(wrong);
  }
  console.log('userCars', userCars);
  
}

questionThree();


// //coding question
function questionFour() {
  var userCode = prompt('Do you love coding? (Trick question!)');
  if (userCode === 'Yes') {
    alert('Great answer');
    correct++;
  } else if (userCode === 'No') {
    alert('I\'ll accept that, but I don\'t like it');
    incorrect++;
  } else {
    alert(wrong);
    console.log('userCode', userCode);
  }
}

questionFour();


//;

// //traffic question
function questionFive() {
  var userTraffic = prompt('Do you enjoy Seattle traffic?');
  if (userTraffic === 'Yes') {
    alert('That\'s strange!');
    incorrect++;
  } else if (userTraffic === 'No') {
    alert('Don\'t we all');
    correct++;
  } else {
    alert(wrong);
  }
  console.log('userTraffic', userTraffic);
}

questionFive();

// //indent question
function questionSix() {
  var userEye = prompt('Are your eyes green?');
  if (userEye === 'No') {
    alert('correct!');
    correct++;
  } else if (userEye === 'Yes') {
    alert(wrong);
    incorrect++;
  }
  

  console.log('correct', correct);
  console.log('incorrect', incorrect);
}
questionSix();