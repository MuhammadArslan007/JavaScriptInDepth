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