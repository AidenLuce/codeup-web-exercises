/* The parts of a function */
//1. function keyword
// 2. name of the function
// 3. parentheses with zero or mor parameters
// 4. If there is more than one parameter, the list is comma seperated
// 5. Curly braces contain the function body
// 6. The function body contains the code that runs when the function is invoked
// 7. [optional but not common] return statement

// function sayHello(greeting, name){
//     return `${greeting}, ${name}`;
// }

// Here number has local scope

// function localOrGlobal() {
//     let number =20;
//     console.log(number);
// }

// Here number has global scope

// let number =20;
// function localOrGlobal(){
//     console.log(number);
// }

let number = 20;

//function decloration

// function localOrGlobal(){
//     let number = 10;
//     console.log(number);
// }
// // localOrGlobal();
// // console.log(number);
//
// //function expression
//
//
//
// const bark = function(){
//     console.log("WOOOF!");
// }
//
// function yap(){
//     console.log("yip yip");
// }




//function declaration
function add(num1, num2) {
    return num1 + num2;
}

//function expression
const add = function(num1, num2){
    return num1 + num2;
}

//arrow function
const add = (num1, num2) => num1 + num2;

//when there is only one parameter, you dont need parentheses around it
const addTen = number => number + 10;

//if there are no parameters, you use empty parenthesis
const hellowWorld = () => "Hello World";





