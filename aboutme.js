var userName = prompt('Hello, what is your name?');
console.log('userName', userName);

var userHeight = prompt('Hi, ' + userName + '. How tall are you? (in inches)');
if (userHeight > 72) {
    alert('That is so tall!');
}   if(userHeight <= 72 > 60){
   }   else if(userHeight < 60){
        alert('I am sorry to hear that');
    }
    alert('Answer the following with Yes or No ');
var userHappy = prompt('Well, ' + userName + ', Are you happy with your height?');
    if (userHappy === 'Yes') {
        alert('That is great to hear');
    }   else if (userHappy === 'No') {
        alert('Well, there isn\'t much you can do about it');
    }   else {
        alert('That\'s not what I was looking for... Try Yes or No');
    } 
