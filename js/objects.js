(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: 'Aiden',
        lastName: 'Luce',
    }
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
     person.sayHello = `Hello from ${person.firstName} ${person.lastName}!`
    console.log(person.sayHello);
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

function discount(amount){
    if(amount >= 200){
        return `Your total before the discount was ${amount}, it is now $${amount - amount * .12}`
    } else{
        return `You have ${(200 - amount)} left to spend in order to be eligible for the discount. Your total amount is ${amount}`
    }
}
   shoppers.forEach(function (person)
    {
        console.log(`Hello ${person.name}! ${discount(person.amount)}`)
    })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named 'books'. Each object should have a title and an author
     * property. The author property should be an object with properties
     * 'firstName' and 'lastName'. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books = [
        {book:'Book # 1', title: 'Title: The History of Hamburgers', author:{firstName: 'John', lastName: 'Smith'}},
        {book:'Book # 2', title: 'Title: The History of Hot dogs', author:{firstName: 'Frank', lastName: 'Gonzalez'}},
        {book:'Book # 3', title: 'Title: The History of Ice cream', author:{firstName: 'Joe', lastName: 'Luce'}},
        {book:'Book # 4', title: 'Title: The History of Donuts', author:{firstName: 'Henry', lastName: 'Quiroz'}},
        {book:'Book # 5', title: 'Title: The History of Pasta', author:{firstName: 'David', lastName: 'Castillo'}},
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(thing){
        console.log(thing.book + '\n' + thing.title + '\n' + 'Author: ' + thing.author.firstName + ' ' +thing.author.lastName)
    })
    /**
     * Bonus:
     * - Create a function named 'createBook' that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named 'showBookInfo' that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   'showBookInfo' function.
     */

})();