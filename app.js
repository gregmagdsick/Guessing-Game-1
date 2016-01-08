var res1 = document.getElementById('resOne');
var res2 = document.getElementById('resTwo');
var res3 = document.getElementById('resThree');
var res4 = document.getElementById('resFour');


var question1 = prompt('Can I first start off by asking your name?');
    //  alert("That's a great name " + question1 + '.');
    res1.textContent = 'That\'s a great name ' + question1 + '.';

var quesData = [['Okay ' + question1 + ' How many states have I been to?', 'Great guess you\'re right!', 'Sorry that\'s wrong.', res2, '5','5'],['2nd question. Do I have 3 dogs?','congrats you\'re right!','nope you\'re wrong',
    res3, 'n','no']]


function questionThree(){
      var question3 = prompt('3rd question! What number am I thinking of?')
        if (question3 === '8') {
        //  alert('Wow youre good!')
        res4.textContent = 'Wow you\'re good!';
        res4.className = 'right';
        } else if (question3 < '8') {
          // alert('Too low!')
          res4.textContent = 'Too Low!';
          res4.className = 'wrong'
          }
          else if (question3 > '8') {
            //alert('Too high!')
            res4.textContent = 'Too high!';
            res4.className = 'wrong';
          }
}
// function questionFour(){
//       var question4 = prompt('3rd and last question. Do I have 3 dogs?');
//         if (question4.toLowerCase() === 'n' || question4.toLowerCase() === 'no') {
//           //alert('congrats youre right!')
//           res4.textContent = 'congrats you\'re right!';
//         }
//         else {
//           //alert('nope youre wrong.')
//           res4.textContent = 'nope you\'re wrong';
//         }
// }
function questionFour(){
      var question4 = prompt(quesData[i][0]);
        if (question4.toLowerCase() === quesData[i][4] || question4.toLowerCase() === quesData[i][5]) {
          //alert('congrats youre right!')
          quesData[i][3].textContent = quesData[i][1];
          quesData[i][3].className = 'right';
        }
        else {
          //alert('nope youre wrong.')
          quesData[i][3].textContent = quesData[i][2];
          quesData[i][3].className = 'wrong';
        }
}

for (var i = 0; i < quesData.length; i++) {
  questionFour()
}
questionThree();
