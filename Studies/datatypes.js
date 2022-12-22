/**
 * DATATYPES:
 * 0. Data types are used to classify different types of data.
 * 1. There are several data types available in JavaScript, including numbers, strings, booleans, arrays, objects, 
 * functions, undefined, null, NaN, and Infinity (-Infinity).
 * 2. Each data type has its own characteristics and can be used for different purposes in a program.
 */

// 1. Number
/**
 * Numbers in JavaScript can be integers or floating point values. 
 * They can be positive or negative, and can be written with or without a decimal point.
 */
// code example
console.log(typeof 37); // "number"
console.log(typeof 3.14); // "number"
console.log(typeof Math.LN2); // "number"
console.log(typeof Infinity); // "number"
console.log(typeof NaN); // "number"

// 2. String
/**
 * Strings in JavaScript are sequences of characters, written using single or double quotes. 
 * They are used to store and manipulate text.
 */
// code example
console.log(typeof ""); // "string"
console.log(typeof ''); // "string"
console.log(typeof "blink"); // "string"
console.log(typeof 'blink'); // "string"

// 3. Boolean 
/**
 * Booleans in JavaScript represent true or false values. 
 * They are often used in conditional statements to determine the flow of a program.
 */
// code example
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"

// 4. Array
/**
 * Arrays in JavaScript are ordered collections of data. 
 * They can contain elements of any data type, and the elements can be accessed using their index number.
 */
// code example
console.log(Array.isArray([])); // "array"
console.log(Array.isArray([1, 2, 3])); // "array"
console.log(Array.isArray(['a', 'b', 'c'])); // "array"

// 5. Object
/**
 * Objects in JavaScript are collections of key-value pairs. 
 * They are used to store and manipulate complex data structures.
 */
// code example
console.log(typeof {}); // "object"
console.log(typeof {name: 'John', age: 30}); // "object"

// 6. Funtion
/**
 * Functions in JavaScript are blocks of code that can be defined and called by name. 
 * They are used to perform a specific task and can accept arguments and return a value.
 */
// code example
console.log(typeof function() {}); // "function"
console.log(typeof function add(a, b) { return a + b; }); // "function"

// 7. Undefined
/**
 * Undefined represents the absence of a value or a variable that has not been assigned a value. 
 * When a variable is declared but not initialized, it is automatically assigned the value undefined.
 */
// code example
let x;
console.log(x); // logs 'undefined'

// 8. Null
/**
 * The null data type in JavaScript represents the absence of a value or a null object reference. 
 * It is often used to indicate that an object has no value.
 */
// code example
let y = null;
console.log(y); // logs 'null'

// 9. NaN
/**
 * NaN, or Not a Number, is a special data type in JavaScript that represents a value that is not a number. 
 * It is often returned when a mathematical operation is performed on a value that is not a number.
 */
// code example
let z = "hello" * 2;
console.log(z); // logs 'NaN'

// 10. Infinity and -Infinity
/**
 * Infinity and -Infinity are special data types in JavaScript that represent values that are greater than or less than any other number. 
 * They are often used to represent the result of mathematical operations that exceed the maximum or minimum values that can be represented by a number.
 */
// code example
let a = 1 / 0;
console.log(a); // logs 'Infinity'

let b = -1 / 0;
console.log(b); // logs '-Infinity'

// 11. Primitive/Simple vs. Complex Data Types
/**
 * There are two main categories of data types: primitive/simple and complex. 
 * Primitive/simple data types include numbers, strings, and boolean values. 
 * These data types are immutable, which means that they cannot be changed once they are created. 
 * Complex data types include objects, arrays, and functions. 
 * These data types are mutable, which means that they can be modified after they are created.

 * Primitive values are passed to a function by copy, 
 * while complex values are passed by reference. 
 * This means that when a primitive value is passed to a function, a copy of the value is created and passed to the function. 
 * When a complex value is passed to a function, a reference to the value is passed to the function. 
 * This means that any changes made to the value within the function will be reflected in the original value.
 */
// code example

// primitive value
let num = 1;

function addOne(x) {
x = x + 1;
return x;
}

console.log(addOne(num)); // logs 2
console.log(num); // logs 1

// complex value
let arr = [1, 2, 3];

function addToArray(y) {
y.push(4);
return y;
}

console.log(addToArray(arr)); // logs [1, 2, 3, 4]
console.log(arr); // logs [1, 2, 3, 4]





