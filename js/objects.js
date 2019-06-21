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

var person = {

    name: {
        firstName: "Mario",
        lastName: "Johnson"
    }

};
    console.log(person.name.firstName);
    console.log(person.name.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.sayHello = function () {
    return "Hello from " + person.name.firstName + " " + person.name.lastName;
};
    console.log(person.sayHello());


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

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function applyDiscount (customerAmount) {
        var output = 0;
        if (customerAmount > 200) {
            output = customerAmount * .12;
        }
        return output;
    }

    function convertToCurrency (num){
        return "$" + num.toFixed(2);
    }

    function displayShopperInfo(shopper){
        var output = "";
        var amount = convertToCurrency(shopper.amount);
        var discount = convertToCurrency(applyDiscount(shopper.amount));
        var finalAmount = convertToCurrency(shopper.amount - applyDiscount(shopper.amount));
        output += shopper.name + " spent " + amount;
        output += " and recieved a discount of " + discount;
        output += " and paid " + finalAmount;
        return output;
    }

    function displayShoppersInfo(shoppers) {
        shoppers.forEach(function (shopper) {
            console.log(displayShopperInfo(shopper));
        });
    }
    displayShoppersInfo(shoppers);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Animal Farm",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "War and Peace",
            author: {
                firstName: "Leo",
                lastName: "Tolstoy"
            }
        },
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F. Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title: "In Search of Lost Time",
            author: {
                firstName: "Marcel",
                lastName: "Proust"
            }
        },
        {
            title: "The Divine Comedy",
            author: {
                firstName: "Dante",
                lastName: "Alighieri"
            }
        }
    ];

    console.log(books[0].title);
    console.log(books[1].author.firstName);
    console.log(books[2].author.lastName);
    console.log(books[3].title);
    console.log(books[4].author.firstName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     */

    books.forEach(function(book,i) {
        console.log("Book # " + (i+1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });

    /**
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
// function createbook(title, firstName, lastName) {
//     var book = {};
//     book.title = title;
//     book.author = {};
//     book.author.firstName = {};
//     book.author.lastName = {};
//     return book;
//
//     }
//
//     books.push(createbook("How to draw Manga", firstName "Katy", lastName "cCoope"));
//     console.log(books);
//



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
