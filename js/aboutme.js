'use strict';

var wrong, rightAnswers, incorrect, userName;
wrong = ('That\'s not what I was looking for... Try YES or NO');
rightAnswers = 0;
incorrect = 0;
console.log('rightAnswers', rightAnswers);
console.log('incorrect', incorrect);


function whatName(){
  var userName = prompt('Hello, what is your name?');
  console.log('userName', userName);
}
whatName();


//height question .
//Use this question and wrap it in a function.
//Function is called heightAnswer()
//Function input is what user types in box (in order to call the function). This has to be a numeric value.

function questionOne(){
  var userHeight = prompt('Am I 6 feet 4 inches?');
  if (userHeight.toUpperCase() === 'YES') {
    alert('Why yes, yes I am');
    rightAnswers++;
  }
  if (userHeight.toUpperCase() === 'NO') {
    alert('Sorry, I really am that tall!');
    incorrect++;
  } else {
    alert(wrong);
  }
  console.log('userHeight', userHeight);
}
questionOne();


// Question two asking if I enjoy my height

function questionTwo(){
  prompt('Answer the following questions with Yes or No ');
  var userHappy = prompt('Well, am I happy with my height?');
  if (userHappy.toUpperCase() === 'YES') {
    alert('That is correct');
    rightAnswers++;
  } else if (userHappy.toUpperCase() === 'NO') {
    alert('Well, there isn\'t much I can do about it');
    incorrect++;
  } else {
    alert(wrong);
  }
  console.log('userHappy', userHappy);
}
questionTwo();



// Third question asking if I like cars

function questionThree(){
  var userCars = prompt('Do I like cars?');
  if (userCars.toUpperCase() === 'YES') {
    alert('That is right!');
    rightAnswers++;

  } else if(userCars.toUpperCase() === 'NO') {
    alert('There must be something else that interests you then');
    incorrect++;
  } else {
    alert(wrong);
  }
  console.log('userCars', userCars);
}
questionThree();



// Fourth question reguarding my love for coding

function questionFour(){
  var userCode = prompt('Do I love coding? (Trick question!)');
  if (userCode.toUpperCase() === 'YES') {
    alert('Great answer');
    rightAnswers++;
  } else if (userCode.toUpperCase() === 'NO') {
    alert('I\'ll accept that, but I don\'t like it');
    incorrect++;
  } else {
    alert(wrong);
    console.log('userCode', userCode);
  }
}
questionFour();



// Fifth question about whether or not I enjoy Seattle Traffic

function questionFive(){
  var userTraffic = prompt('Do I enjoy Seattle traffic?');
  if (userTraffic.toUpperCase() === 'YES') {
    alert('That\'s strange!');
    incorrect++;
  } else if (userTraffic.toUpperCase() === 'NO') {
    alert('Don\'t we all');
    rightAnswers++;
  } else {
    alert(wrong);
  }
  console.log('userTraffic', userTraffic);
}
questionFive();


// Question six about eye color

function questionSix(){
  var userEye = prompt('Are my eyes green?');
  if (userEye.toUpperCase() === 'NO') {
    alert('correct! They\'re blue');
    rightAnswers++;
  }
  else if (userEye.toUpperCase() === 'YES') {
    alert('nope! They are blue!');
    incorrect++;
  }
}
questionSix();


console.log('rightAnswers', rightAnswers);
console.log('incorrect', incorrect);


//Question 7 is a number guessing game where the user will have 4 tries to
// guess my favorite number

function questionSeven(){
  var favoriteNumber = '18';
  var totalGuesses = 4;

  alert('Next is a question where you only have 4 chances to guess the correct answer');
  for (var question7Guesses = 0; question7Guesses < totalGuesses; question7Guesses++) {
    var userGuess = prompt('What is my favorite number?');
    if (userGuess === favoriteNumber) {
      alert('That is my favorite number!');
      rightAnswers++;
      break;
    } else if (userGuess < favoriteNumber) {
      alert('too low! try a little higher');
    } else if (userGuess > favoriteNumber) {
      alert('Too high!');

    }
  }
}
questionSeven();

console.log('rightAnswers',rightAnswers);
console.log('incorrect', incorrect);


// Question 8 is going to ask the user to guess which brands of cars I have owned. //There are several right answers.

function questionEight(){
  var rightCars = ['MAZDA', 'FORD', 'SCION'];
  var totalTries = 6;
  var correct = false;
  alert('Here is the final question. You will have 6 tries to guess a possible answer');
  for (var question8Guesses = 0; question8Guesses < totalTries; question8Guesses++) {
    var userBrand = prompt('Name one brand of car that I own');
    console.log('Question 8 answer' + userBrand);
    if (rightCars.includes(userBrand.toUpperCase())) {
      alert('Great job! I own a ' + rightCars[0] + ', ' + rightCars[1] + ', ' + rightCars[2]);
      correct = true;
      rightAnswers++;
      break;
    }
    else {
      alert('Try again');
    }
    if (question8Guesses === 6){
      alert('Sorry, I own a ' + rightCars[0] + ', ' + rightCars[1] + ', ' + rightCars[2]);
    }
  }
}
questionEight();

alert('Great job, ' + userName + ' you got ' + rightAnswers + 'out of 8 answers right');