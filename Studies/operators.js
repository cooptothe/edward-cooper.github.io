/**
 * OPERATORS:
 * 0. Operators are symbols or keywords that perform a specific function or operation on one or more operands 
 * (values or variables). 
 * 1. In JavaScript, there are various types of operators, including comparison, logical, unary, and ternary.
 * 2. These operators allow us to make comparisons, 
 * perform logical operations, manipulate values, and make decisions in our code.
 */

// 1. Assignment Operators
/**
 * Assignment operators are used to assign values to variables. 
 * There are several assignment operators in JavaScript, 
 * including the basic assignment operator (=), which assigns a value to a variable.
 * 
 * Other assignment operators include the compound assignment operators 
 * (+=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, and |=). 
 * These operators perform an operation on the current value of a variable and 
 * then assign the result to the same variable.
 */
// code example

// Basic assignment operator
var x = 10;
console.log(x); // 10

// Compound assignment operator
var y = 5;
y += 3;
console.log(y); // 8

// 2. Arithmetic Operators
/**
 * Arithmetic operators are used to perform arithmetic calculations, 
 * such as addition, subtraction, multiplication, and division. 
 * There are several arithmetic operators in JavaScript, 
 * including the basic addition (+), subtraction (-), multiplication (*), and division (/).
 * 
 * Other arithmetic operators include the remainder operator (%), 
 * which returns the remainder of a division operation, and the 
 * exponentiation operator (**), which raises a number to a power.
 */
// code examples

// Addition operator
var x = 10;
var y = 5;
var z = x + y;
console.log(z); // 15

// Subtraction operator
var a = 20;
var b = 10;
var c = a - b;
console.log(c); // 10

// Multiplication operator
var d = 3;
var e = 4;
var f = d * e;
console.log(f); // 12

// Division operator
var g = 12;
var h = 4;
var i = g / h;
console.log(i); // 3

// 3. Comparison Operators
/**
 * Comparison operators are used to compare two values and return a boolean value of true or false. 
 * These operators include == (equal to), === (strict equal to), != (not equal to),
 * !== (strict not equal to), > (greater than), < (less than), 
 * >= (greater than or equal to), and <= (less than or equal to).
 */
// code examples
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(5 !== '5'); // true
console.log(5 !== 5); // false
console.log(5 > 4); // true
console.log(5 < 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true

// 4. Logical Operators
/**
 * Logical operators are used to perform logical operations on operands. 
 * They include the && (and) operator, the || (or) operator, 
 * and the ! (not) operator.
 */
// code examples
let a = true;
let b = false;

console.log(a && b); // logs false
console.log(a || b); // logs true
console.log(!a); // logs false

// 5. Unary Operators 
/**
 * Unary operators are operators that operate on a single operand. 
 * They include the ! (not) operator, the typeOf operator, 
 * and the - (negative) operator.
 */
// code examples
let a = true;
let b = "hello";
let c = 5;

console.log(!a); // logs false
console.log(typeof b); // logs "string"
console.log(-c); // logs -5

// 6. Terany Operator
/**
 * The ternary operator is a conditional operator that takes three operands. 
 * It is written in the form of a ? b : c, 
 * where a is a boolean condition, b is the result if the condition is true, 
 * and c is the result if the condition is false.
 */
// code examples 
let a = true;
let b = false;

console.log(a ? "a is true" : "a is false"); // logs "a is true"
console.log(b ? "b is true" : "b is false"); // logs "b is false"
