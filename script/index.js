// task1
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.

let Language="Javascript"
let score=10


// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.
let Length=10
let width=5
area=Length * width
// concatenation
console.log("the area of the rectangle is " + area)
// backticks
console.log(`the area of the rectangle is ${area}`)


// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2
let num1=10
let num2=4
remainder=num1%num2
console.log('the remainder is ' + remainder)


// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)} remainder ${num1 % num2}`);
//task1