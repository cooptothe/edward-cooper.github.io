/**
 * FUNCTIONS:
 * 0. A function is a block of code that performs a specific task.
 * 1.  It can take in inputs, known as parameters, and 
 * return a single output, known as a return value.
 * 2. Functions allow us to reuse code and make our programs more organized and efficient.
 */

// 1. The Two Phases to Using Functions
/**
 * First, we must define the function. 
 * This involves specifying the task the function will perform and 
 * any necessary parameters.
 * 
 * 
 * Next, we can execute or call the function by using its name 
 * followed by parentheses, including any necessary arguments.
 */
// code example 
function greet(name) {
console.log("Hello, " + name + "!");
}
    
greet("John"); // logs "Hello, John!"

// 2. What's the difference between a function's parameters and arguments passed to a function?
/**
 * The parameters of a function are the variables specified in the function definition. 
 * These act as placeholders for the actual values, known as arguments, 
 * that will be passed to the function when it is called.
 */
// code example 
function greet(name) {
console.log("Hello, " + name + "!");
}
    
greet("John"); // the parameter is "name" and the argument is "John"

// 3. What's the syntax for a named function?
/**
 * A named function is a function with a specific name, which is used to call the function. 
 * The syntax for a named function is:
 */
function functionName(parameters) {
    // function code
    }

// code example 
function greet(name) {
console.log("Hello, " + name + "!");
}

// 4. How we assign a function to a variable?
/**
 * We can assign a function to a variable by using the assignment operator (=). 
 * This is known as a function expression.
 */
// code example
let greet = function(name) {
console.log("Hello, " + name + "!");
}
    
greet("John"); // logs "Hello, John!"

// 5. How do we specify inputs and outputs?
/**
 * To specify inputs, or parameters, we list them within the parentheses in the function definition. 
 * To specify an output, or return value, we use the return statement within the function code.
 */
// code example
function add(x, y) {
return x + y;
}
    
console.log(add(2, 3)); // logs 5

// 6. Scope
/**
 * Scope refers to the visibility and accessibility of variables within a program. 
 * Functions can see and modify variables in the global or parent scopes, but the inverse is not true. 
 * Variables defined within a function are only accessible within that function.
 */
// code example
let x = "global";

function testScope() {
let x = "local";
console.log(x); // logs "local"
}

testScope();
console.log(x); // logs "global"

// 7. Closures
/**
 * A closure is a function that has access to the variables in its parent scope, 
 * even after the parent function has finished executing. 
 * If an object returned from the function is held in memory somewhere (referenced), 
 * that closure stays alive and the data can continue to exist within it.
 */
// code example
function createCounter() {
let count = 0;
return function() {
count++;
return count;
}
}
const counter = createCounter();
console.log(counter()); // 1
