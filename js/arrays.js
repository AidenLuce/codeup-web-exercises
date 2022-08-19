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

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99]
//
// prices.forEach(function(price){
//     console.log("item number " + Index + " costs " + price)
// });

// let groceryList = ['bread','eggs','butter','milk'];
//
// groceryList.forEach(function(grocery){
//     console.log('I need to buy ' + grocery)
// })

prices.forEach((price) =>{
    console.log(price)
});

