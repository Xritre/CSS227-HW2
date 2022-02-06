var random = Math.floor(Math.random() * 100) + 1;
var max=100; let min=0;
console.log('min is ' + min);
console.log('max is ' + max);
while(guess !== random)
    {
        var guess = prompt('Guess the number between ' + min +  ' and ' + max  + ' or input other numbers to see the secret number' );
        guess = parseInt(guess);
        if(guess>max || guess<min  )
        {
            break;
        }
        else if(guess<random)
        {
            min = guess;
        }
        else if (guess>random)
        {
           
            max = guess;
        }
    }
if(guess>max || guess<min || guess == random  )
{
    alert('secrrt number is ' + random)
}
