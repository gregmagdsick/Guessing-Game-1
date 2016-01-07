var question1 = prompt("Can I first start off by asking your name?");
      alert("That's a great name " + question1 + '.');

      var question2 = prompt('Okay ' + question1 + ' How many states have I been to?');
        if (question2 === '5') {
          alert("Great guess you're right!")
        } else { 
          alert('Sorry thats wrong')};

      var question3 = prompt('2nd question! What number am I thinking of?')
        if (question3 === '8') {
          alert('Wow youre good!')
        } else if (question3 < '8') {
           alert('Too low!')
          }
          else if (question3 > '8') {
            alert('Too high!')
          };

      var question4 = prompt('3rd and last question. Do I have 3 dogs?')
        if (question4.toLowerCase() === 'n' || question4.toLowerCase() === 'no') {
          alert('congrats youre right!')
        }
        else {
          alert('nope youre wrong.')
        };