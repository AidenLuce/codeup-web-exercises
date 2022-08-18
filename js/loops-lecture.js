// let slices = 4
// console.log(`There are ${slices} slices`)
// while (slices > 0){
//     console.log("I'll have a slice")
//     slices = slices - 1;
//     console.log(`now there are ${slices} left`);
// } console.log('No more pizza :(');

/** Instructions */
        //Ask user for input -- how much does something cost
        //Assign user input to a variable
        //Declare a variable to hold a total cost
        //tell the user what the total is
        //Get the user input for the next item's cost
        //There needs to be a way for the user to say when there are no more items

/** First Draft*/
// let total = 0;
// let priceOfItem = parseFloat(prompt('Please enter the price of your item:'));
// total = total + priceOfItem
// alert('Your total is now ' + total)
// let userInput = "";
// while (userInput !== "stop"){
//     userInput = prompt("Enter the price of your next item:");
//     if (userInput === "stop"){
//         alert('Your final total is: ')
//     }
// }

/** Second (cleaner) Draft */

// let total = 0;
// while(true){
//     let userInput = prompt('Enter the price of your item:' + '\nEnter STOP when you are done') ;
//     if (userInput === "STOP"){
//         alert("Your final total is: " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }
//
    /** Guessing Game */

// let number = Math.ceil(Math.random() *6 );
// let guess;
// console.log(guess);
// do {
//     guess = parseInt(prompt('Enter an number 1 - 6'));
// } while (guess !== number);
// alert(`Your guess of ${guess} was correct!`)


    /** For Loops (Shorthand) */

// for(let i = 100; i >= 0; i--){
//     console.log(i);
// }
for (i = 0; i < 100; i++){
    console.log(i)
}

// let i = 0;
// while (i < 100){
//     console.log(i);
//     i++;
// }
console.log('outside the loop: '+ i)



