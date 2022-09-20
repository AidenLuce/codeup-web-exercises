//The three steps of handling events

// 1. Get a reference to the element that will trigger the event
let theButton = document.querySelector("button");

// 2. Write the function that will be triggered by the event
// A function is a set of instructions. This kind of function that is triggered by an event is called an event handler
// The function contains the instructions that will run when the event is triggered.
function eventHandler(){
    alert("YOU CLICKED THE BUTTON!");
}

// 3. Register the handler

// We can use the addEventListener with two arguments: the type of even t and the function that will be triggered

//theButton.addEventListener('click', eventHandler);

// theButton.onclick = eventHandler();

// let theSquare = document.querySelector('square').addEventListener('click',function(){
//     alert("I AM A SQUARE")
// })

let theSquare = document.querySelector('.square');

let theHandler = function(){
    // alert("I am a square " + window.getComputedStyle(document.querySelector(".square"), null).getPropertyValue('background-color'));
}

theSquare.addEventListener('mousemove', function(e){
    // console.log(e.target.className);
    // let theColor = getComputedStyle(e.target).backgroundColor
    // console.log(theColor);
    // document.getElementById("anotherSquare").style.backgroundColor = theColor;
    alert("Event!");
});

let theButton = document.querySelector('button');

let buttonClickFunction = function(){
    document.querySelector('p').innerText = "You changed me";
}

document.querySelector('body').addEventListener('resize', function(event){
    alert("Free Flashlights! Just sign up for email newsletter!");
    // console.log(getComputedStyle(event.target).backgroundColor);
})

theButton.onclick = buttonClickFunction;

// Get the user input from a form field
let formInput = document.getElementById("formInput");

formInput.onkeyup = function(){
    console.log(formInput.value);
}




