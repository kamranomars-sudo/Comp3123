// ==========================================
// COMP 3123 - Full Stack Development I
// Lab 2 - ES6 Practice Exercises
// ==========================================


// ==========================================
// Exercise 1
// ==========================================

// Rewrite the original function using ES6 syntax

const greeter = (myArray, counter) => {
    const greetText = 'Hello ';

    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// ==========================================
// Exercise 2
// ==========================================

// Capitalize the first letter of a string
// Using destructuring assignment and spread operator

const capitalize = (string) => {
    const [firstLetter, ...remainingLetters] = string;

    return firstLetter.toUpperCase() + remainingLetters.join('');
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


// ==========================================
// Exercise 3
// ==========================================

// Use map() and the capitalize() function
// to capitalize the first character of each color

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);


// ==========================================
// Exercise 4
// ==========================================

// Use filter() to remove values less than 20

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);


// ==========================================
// Exercise 5
// ==========================================

// Use reduce() to calculate the sum and product

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, number) => sum + number, 0);

const calculateProduct = array.reduce((product, number) => product * number, 1);

console.log(calculateSum);
console.log(calculateProduct);


// ==========================================
// Exercise 6
// ==========================================

// Create a Car class

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}


// Create a Sedan subclass that extends Car

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}


// Create a Sedan object

const mySedan = new Sedan('Toyota Camry', 2024, 25000);

console.log(mySedan);