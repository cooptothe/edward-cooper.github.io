/**
 * CONTROL FLOW:
 * 0. Control flow refers to the way that a program executes its code.
 * 1. Control flow is used to make decisions and to execute 
 * different blocks of code based on certain conditions.
 * 2. There are several ways to control the flow of a program, including using if statements, 
 * else-if statements, else statements, and switch statements.
 */

// 1. If
/**
 * The if statement is used to execute a block of code if a certain condition is true.
 */
// code example
let num = 15;
if (num > 10) {
console.log("The number is greater than 10");
}
// Output: "The number is greater than 10"

// 2. Else If
/**
 * The else-if statement is used to add additional conditions to an if statement.
 * If the first condition is not met, 
 * the program will check the next condition, and so on.
 */
// code example
let num2 = 8;
if (num2 > 10) {
console.log("The number is greater than 10");
} else if (num2 < 5) {
console.log("The number is less than 5");
}
// Output: "The number is less than 5"

// 3. Else
/**
 * The else statement is used to execute a block of code if none of the conditions in an 
 * if or else-if statement are met.
 */
// code example
let num3 = 8;
if (num3 > 10) {
console.log("The number is greater than 10");
} else if (num3 < 5) {
console.log("The number is less than 5");
} else {
console.log("The number is between 5 and 10");
}
// Output: "The number is between 5 and 10"

// 4. Switch
/**
 * The switch statement allows us to execute different blocks of code 
 * depending on the value of a certain expression. 
 * It is often used as an alternative to multiple if-else statements.
 */
//code example
var day = "Monday";

switch (day) {
case "Monday":
console.log("It's Monday!");
break;
case "Tuesday":
console.log("It's Tuesday!");
break;
default:
console.log("It's not Monday or Tuesday.");
}
// Output "It's Monday!" because day is equal to "Monday".




