var res1 = document.getElementById('resOne');
var res2 = document.getElementById('resTwo');
var res3 = document.getElementById('resThree');
var res4 = document.getElementById('resFour');


var question1 = prompt('Can I first start off by asking your name?');
    //  alert("That's a great name " + question1 + '.');
    res1.textContent = 'That\'s a great name ' + question1 + '.';

function questionTwo(){
      var question2 = prompt('Okay ' + question1 + ' How many states have I been to?');
        if (question2 === '5') {
        //  alert("Great guess you're right!")
        res2.textContent = 'Great guess you\'re right!';
        } else {
          //alert('Sorry thats wrong')
        }
        res2.textContent = 'Sorry that\'s wrong.';
}
function questionThree(){
      var question3 = prompt('2nd question! What number am I thinking of?')
        if (question3 === '8') {
        //  alert('Wow youre good!')
        res3.textContent = 'Wow you\'re good!';
        } else if (question3 < '8') {
          // alert('Too low!')
          res3.textContent = 'Too Low!';
          }
          else if (question3 > '8') {
            //alert('Too high!')
            res3.textContent = 'Too high!';
          }
}
function questionFour(){
      var question4 = prompt('3rd and last question. Do I have 3 dogs?');
        if (question4.toLowerCase() === 'n' || question4.toLowerCase() === 'no') {
          //alert('congrats youre right!')
          res4.textContent = 'congrats you\'re right!';
        }
        else {
          //alert('nope youre wrong.')
          res4.textContent = 'nope you\'re wrong';
        }
}

questionTwo();
questionThree();
questionFour();
