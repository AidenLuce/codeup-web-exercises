/** 8-25-2022 */

// let array = [5,10,15]
// function arrayAverage(array){
//     let total = 0
//     for(let i = 0; i <array.length; i++){
//         if(!isNumber((array[i]))){return false;}
//         total += array[i];
//     }
//     return total/array.length
// }
//
// let stringArray = ['Jabba', 'Darth Maul', 'Hondo'];
//
//     function longestString(arrayOfStrings){
//         let longest = '';
//         for (let i = 0; i < arrayOfStrings.length; i++){
//             if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
//         }
//         return longest
//     }

/** 9-19-2022 */

// const attendance ={
//     miami: 32789,
//     buffalo: 45678,
//     portland: 24567
// }
//
// function totalAttendance(element){
//     let attendanceArray = Object.values(element);
//     let total = 0
//     for (let i = 0; i < attendanceArray.length; i++){
//         total += attendanceArray[i];
//     }
//     return total
// }
// console.log(totalAttendance(attendance))
//
//
//
// function averageAttendance(element){
//     let attendanceArray = Object.values(element);
//     let average = 0
//     for (let i = 0; i < attendanceArray.length; i++){
//         average += attendanceArray[i];
//     }
//     return average
// }
// console.log((averageAttendance(attendance)) / 3)

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

// let address = '8646 Sunny Oaks'
//
// function convertAddressToObject(addressString){
//     return{
//         streetNumber: address.substring(0, addressString.indexOf(' ')),
//         streetName: address.substring(addressString.indexOf(' ') + 1)
//     }
// }
// console.log(convertAddressToObject())

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
// peopleAndPets=[
//     {name: 'Fernando Mendoza', pets: 1},
//     {name: 'Douglas Hirsh', pets: 8},
//     {name: 'Kenneth Howell', pets: 2}
// ]
//
// function totalPets(arrayOfObjects){
//     let total = 0;
//     for (let i = 0; i < arrayOfObjects.length; i++){
//         total += arrayOfObjects[i].pets
//     }
//     return totalPets()
// }

/*================== DOM WARMUPS ===================================*/

// When the user clicks the button that has the text "Change Heading", the
// text of the <h1> element changes to read "I own the DOM"

// Every time the user enters a character in the input with id "source", that
// character appears in the <p> element with the id "output"

$("button").on("click", function(){
    $("h1").html("I own the DOM")
});
$("#source").on("input", function(){
   $("#output").text($("#source").val());
})

/*================== DOM WARMUPS PT2===================================*/


// When the mouse enters the h2 with the text "Lorem Generator",
// A paragraph contain lorem appears in the div with the id of loremParagraphs

const lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi debitis, deserunt doloremque dolores esse expedita harum ipsum maiores minus neque perferendis quae quaerat, quas quis sit suscipit vel veniam, voluptatum.</p>";
$("#loremParagraphs h2").mouseenter(function(){
    $("#loremParagraphs").append(lorem)
})

// When the user clicks on the "Hot Pink It" button, all the text in the div
// with the id of loremParagraphs becomes hotpink if it's black, or black if it's hotpink.

$("#hotPinkIt").on("click", function(){
    $("#loremParagraphs").toggleClass("hotpink");
})
