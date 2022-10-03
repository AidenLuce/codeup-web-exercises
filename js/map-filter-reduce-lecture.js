const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = '';
// prices.forEach((price, index, array) => {
//     const tax = (price *.0285).toFixed(2)
//     const total = (price + parseFloat(tax)).toFixed(2)
//     output += `<p>Item number: ${index + 1}. Price: $${price}. Tax: $${tax}. Total: $${total}</p>`;
//     console.log(output)
//     $("div").html(output);
//     if( index === array.length - 1){
//         $("div").append("<p>That;s it!!!</p>")
//     }
//
// });

// const pricesAfterTax = prices.map(price =>{
//     const tax = (price *.0285).toFixed(2)
//     const total = (price + parseFloat(tax)).toFixed(2)
//     return parseFloat(total);
// });
// console.log(prices)
// console.log(pricesAfterTax)
//
// const doubledArray = prices.map(price => price * 2);
// console.log(doubledArray);

// const dessert = ['sherbet', 'whiskey cake', 'cupcake', 'eclair'];
// const eatingDessert = dessert.map(dessert => `Eating ${dessert}`)
// eatingDessert.forEach(element => {
//     $("#push").append(`<p>${element}</p>`)
// })

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

// const mileages = cars.map(car => car.mileage);
// console.log(mileages)
//
// const newObject = cars.map(car => {
//     car.newProp = 'new property';
//     return car;
// })
// console.log(cars[0]);





 /** filtered through prices under $10
  *  .filter example */

// prices.filter(price => price<10)
// .map(price => {
//     const tax = (price * .0825).toFixed(2)
//     const total = (price + parseFloat(tax)).toFixed(2)
//     return parseFloat(total);
// }).forEach(price => $("div").append(`<p>${price}</p>`))




/** .reduce example */
const totalCost = prices.reduce(function(total, itemPrice, index){
    // console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the itemPrice is ${itemPrice}`);
    return total + itemPrice;
});
// $("#output").append(`<p>The total is ${totalCost}</p>`);

// accumulator = acc

// const averagePrice = prices.reduce(function (accumulator, current, index, array){
//     accumulator += current
//     if(index === array.length -1){
//     return accumulator/arrray.length;
//     }
// return accumulator;
// })

const total = prices.reduce(function(total, priceOfItem){
    return total + priceOfItem;
}, 158.76);
console.log(total.toFixed(2));

// const highestMileage = cars.reduce((accumulator, car, index, array ) =>{
//     accumulator.push(car.mileage);
//     if (index === array.length -1){
//         Math.max(...accumulator)
//     } else {accumulator.push(car.mileage);
//         return accumulator
//     }
// },[] );
// console.log(highestMileage)

const highestMileage = cars.reduce((accumulator, car) =>{
    accumulator.push(car.mileage);
    return accumulator;
},[]).reduce((accumulator, mileage)=>{
    return Math.max(accumulator, mileage);
});

console.log(highestMileage)




