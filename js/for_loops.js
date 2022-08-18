/** Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10) */

function showMultiplicationTable(number){
 for(let i = 0; i < 11; i ++){
  console.log(number + ' x ' + i + ' = ' + (i * number))
 }
}

/** Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example: */
for (let i = 0; i <= 9; i++ ){
    let randomNumber = Math.floor(Math.random() * 200 + 20)
    console.log(isEven(randomNumber))
}
function isEven(randomNumber){
    if (randomNumber % 2 === 0){
        return (randomNumber + ' is even ')
    } else {
        return (randomNumber + ' is odd')
    }
}

/** */
for ( let i = 1; i <= 9; i++) {
    let string = i.toString();
    for ( let j = 1; j < i; j++){
        string += i;
    }
    console.log (parseFloat(string))
}

/** */
for ( let i = 100; i >= 5; i -= 5){
    console.log(i)
}





