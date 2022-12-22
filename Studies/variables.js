/**
 * VARIABLES:
 * 0. Variables are used to store data in a program. 
 * They allow us to give names to data and use those names to refer to the data throughout our code. 
 * This makes our code easier to read and understand, as well as easier to modify and maintain.
 * 1. In order to use a variable, we must first declare it. 
 * This is done using the var, let, or const keyword, followed by the name we want to give to the variable
 * 2. Once a variable is declared, we can assign a value to it using the assignment operator (=).
 * 
 */

// 1.Delcaration and Assignment
// Here are some examples on how to declare and assign varibales.
var x; // declare variable x
x = 10; // assign value 10 to x
console.log(x); // outputs 10

// 2. var, let, const
/**
 * "var" is the oldest way to declare a variable in JavaScript and is still widely used. 
 * However, it has some limitations and is generally considered to be less safe.
 * 
 * "let" is a newer keyword that was introduced in ES6 (ECMAScript 6). 
 * It is similar to "var", but it has some additional features that make it safer and more flexible. 
 * For example, "let" variables are block-scoped, which means they are only accessible within the block of code in which they are declared. 
 * This can help prevent unintended consequences of global variables and make your code easier to reason about.
 * 
 * "const" is another keyword introduced in ES6. 
 * It is used to declare variables that cannot be reassigned. 
 * This means that once a value is assigned to a "const" variable, it cannot be changed. 
 * "const" variables must also be initialized (assigned a value) when they are declared.
 */

// 3. Hoisting
/**
 * Variables declared with the "var" keyword are hoisted to the top of their scope.
 * This means that they are available to be used anywhere in the scope, even before they are declared. 
 * For example:
 */
console.log(x); // undefined
var x = 10;
console.log(x); // 10
/**
 * In this code, the first console.log statement will output undefined,
 * even though x is not declared until later in the code. 
 * This is because the declaration of x is hoisted to the top of the scope, 
 * while the assignment (x = 10) remains in its original position.
 * 
 * Note that "let" and "const" variables are not hoisted in the same way as "var" variables. 
 * They are only available after they are declared and initialized.
 */