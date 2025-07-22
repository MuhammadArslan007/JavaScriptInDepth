let x = 4;

// Using if statement
if (x < 5){
    console.log("x is less than 5");
}


let grade = 85;
// Using if-else statement
if (grade >= 50) {
    console.log("You passed!!!!");  
}
else {
    console.log("You failed :(");  
}

// Using if-else if-else statement
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Fail");
}

// Using Switch case

let day = 2;
switch(day) {
    case 1: 
        console.log("Monday");
        console.log("Start of the week");
        
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("putt valid");
        
}

console.log("########################################################################################")

// While loop
// increment my sallary 5 time with 2%
let salary = 1000;
let i = 0;
while ( i < 5) {
    salary += salary * (.02);
    console.log("Salary after increment " + (i + 1)  + ": " + salary);
    ++i;
}

// do-while loop
// increament my sallary at least 1 max 5 time with 2%
let salary2 = 1000;
let j = 0;
do {
    salary2 += salary2 * (.02);
    console.log("Salary after increment " + (j + 1)  + ": " + salary2);
    ++j;
}while (j < 5); 
// For loop
// increment my sallary 5 time with 2%
let salary3 = 1000;
for (let k = 0; k < 5; k++) {
    salary3 += salary3 * (.02);
    console.log("Salary after increment " + (k + 1)  + ": " + salary3);
}       


// For-in loop
let person = {  
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// For-of loop  
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
// ForEach loop
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});


console.log("########################################################################################");
// Function Intorduction with and without parameters
function greet(name) {
    console.log("Hello, " + name + "!");
    
}
greet("arslan");

// Function expression\
let greetExpression = function(name) {
    console.log("hello ,"+ name + "!");
    
}
greetExpression("arslan");

// Arow function
let greetArrow = (name) => {
    console.log("hello, " + name + "!");
    
}

greetArrow("arslan");

// Function with in object
const personObj = {
    name: "Arslan", 
    greet: function() {
        console.log(this);
        
        console.log("Hello, " + this.name + "!");
        
    },
    greetArrow: () => {
        console.log("Hello, " + this.name + "!");
    }   
}


personObj.greet();



// Function with return value
function add(a, b) {
    return a + b;
}
add(1, 2);

// Function with default parameters

let mul = (a, b = 5) => {
    return a*b;
}
console.log(mul(2)); // Output: 10
console.log(mul(2, 3)); // Output: 6

// function with rest parameters
function sum(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// function with spread operator
function multiply(a, b, c) {
    return a * b * c;
}
let numbersArray = [2, 3, 4];
console.log(multiply(...numbersArray)); // Output: 24

// function with callback
function processArray(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}   

let doubledArr = processArray([1, 2, 3], function(item) {
    let doubled = item * 2;
    return doubled;
});

console.log("doubledArr: " + doubledArr); 

