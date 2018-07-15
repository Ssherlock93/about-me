'use strict';

var wrong, correct, incorrect;
wrong = ('That\'s not what I was looking for... Try YES or NO');
correct = 0;
console.log('correct', correct);
console.log('incorrect', incorrect);  

function name() {

var userName = prompt('Hello, what is your name?');
console.log('userName', userName);
}
name();

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
  if (userHappy.toUpperCase() === 'YES') {
    alert('That is great to hear');
    correct++;
  } else if (userHappy.toUpperCase() === 'NO') {
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
  while (userCars.toUpperCase() !== 'YES') {
    userCars = prompt(wrong);
    correct++;
    break;

  }
  if (userCars.toUpperCase() === 'No') {
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
  if (userCode.toUpperCase() === 'YES') {
    alert('Great answer');
    correct++;
  } else if (userCode.toUpperCase() === 'NO') {
    alert('I\'ll accept that, but I don\'t like it');
    incorrect++;
  } else {
    alert(wrong);
    console.log('userCode', userCode);
  }
}

questionFour();




// //traffic question
function questionFive() {
  var userTraffic = prompt('Do you enjoy Seattle traffic?');
  if (userTraffic.toUpperCase() === 'YES') {
    alert('That\'s strange!');
    incorrect++;
  } else if (userTraffic.toUpperCase() === 'NO') {
    alert('Don\'t we all');
    correct++;
  } else {
    alert(wrong);
  }
  console.log('userTraffic', userTraffic);
}

questionFive();

// // Questions about eye color
function questionSix() {
  var userEye = prompt('Are your eyes green?');
  if (userEye.toUpperCase() === 'NO') {
    alert('correct!');
    correct++;
  } else if (userEye.toUpperCase() === 'YES') {
    alert(wrong);
    incorrect++;
  }
  

  console.log('correct', correct);
  console.log('incorrect', incorrect);
}
questionSix();