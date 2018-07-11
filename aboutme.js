var userName = prompt('Hello, what is your name?');
console.log('userName', userName);

var userHeight = prompt('Hi, ' + userName + '. How tall are you? (in inches)');
if (userHeight > 72) {
    alert('That is so tall!');
}   if(userHeight <= 72 > 60){
   }   else if(userHeight < 60){
        alert('I am sorry to hear that');
    }
    alert('Answer the following questions with Yes or No ');
var userHappy = prompt('Well, ' + userName + ', Are you happy with your height?');
    if (userHappy === 'Yes') {
        alert('That is great to hear');
    }   else if (userHappy === 'No') {
        alert('Well, there isn\'t much you can do about it');
    }   else {
        alert('That\'s not what I was looking for... Try Yes or No');
    }  
var userCars = prompt(userName + ',Do you like cars?');
    if (userCars === 'Yes'){
        alert('Awesome!');
    }   else if (userCars === 'No') {
        alert('There must be something else that intersts you then');
    }   else {
        alert('Try entering Yes or No');
    }
var userCode = prompt('Do you love coding? (Trick question!)');
    if (userCode === 'Yes') {
        alert ('Great answer');
    }   else if (userCode === 'No') {
        alert ('I\'ll accept that, but I don\'t like it')
    }   else {
        alert('Enter either Yes or No');
    }
var userTraffic = prompt('Do you enjoy Seattle traffic?');
    if (userTraffic === 'Yes') {
        alert ('That\'s strange!');
    }   else if (userTraffic ==='No') {
        alert('Don\'t we all');
    }   else {
        alert ('Try either Yes or No');
    }

