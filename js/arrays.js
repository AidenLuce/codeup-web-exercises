// declaring an array literal:
//each item in an array is called an element

// let groceryList = ['bread','eggs','butter','milk'];
// for(let i= 0; i < groceryList.length; i++ ){
//     if (i === groceryList.length -1)
//         console.log(`I have to buy ${groceryList[i]}`)
// }

// let count = ['One', 'Two', 'Three', 'Four']
// for (let i = 0; i < count.length; i++) {
//         console.log(count[i])
// }
//
// let texasCities = ('San Antonio', 'Houston', 'Dallas', 'El Paso');
// // for(let i = 0; i < texasCities.length; i++){
// //     console.log(texasCities[i]);
// // }
//
// function outputArray(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }
// outputArray(texasCities);

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99]
//
// prices.forEach(function(price){
//     console.log("item number " + Index + " costs " + price)
// });

let groceryList = ['bread','eggs','butter','milk'];
//
// groceryList.forEach(function(grocery){
//     console.log('I need to buy ' + grocery)
// })

// prices.forEach((price) =>{
//     console.log(price)
// });

/** Adds to the end of the array */

groceryList.push('Potatoes');
console.log(groceryList)

/** Removes last item from array */

groceryList.pop();
console.log(groceryList)
/** Adds to the beginning of array */

groceryList.unshift('sliced cheddar');
console.log(groceryList)

/** Removes from the end of array */

groceryList.shift();
console.log(groceryList)

/** */

let indexOfButter = groceryList.indexOf('butter');
console.log (indexOfButter);

groceryList[indexOfButter]='peanut butter';
console.log(groceryList)

// /** Assigns a new value to the first element in the array
//  * In this case 'bread' => 'avocados' */
//
// groceryList[0] = 'avocados';
// console.log(groceryList)
//
// /** Adding 'butter' to the middle */
//
// let firstHalfOfGroceries = groceryList.slice(0,2);
// console.log(firstHalfOfGroceries);
// let secondHalfOfGroceries = groceryList.slice(2,10)
// console.log(secondHalfOfGroceries);
//
// firstHalfOfGroceries.push('butter')
//
// groceryList = firstHalfOfGroceries.concat(secondHalfOfGroceries);
// console.log(groceryList)
//
// /** Puts the array in reverse */
//
// groceryList.reverse();
// console.log(groceryList);
//
// groceryList.sort();
// console.log(groceryList);

let wishList = [25,15, 34, 8,59];
function checkPrices(wishList){
    for (let i = 0; i < wishList.length; i++){
        if (wishList[i] > 50){
            return false;
        }
    }
    return true;
}
function wishListTotal(wishList){
    let total = 0
    for (let i = 0; i < wishList.length; i++){
        total += wishList[i];
    }
    return total <= 100;
}

console.log(wishListTotal(wishList));


