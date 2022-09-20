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
peopleAndPets=[
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]

function totalPets(arrayOfObjects){
    let total = 0;
    for (let i = 0; i < arrayOfObjects.length; i++){
        total += arrayOfObjects[i].pets
    }
    return totalPets()
}




