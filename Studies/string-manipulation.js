/**
 * STRING MANIPULATION:
 * 0. String manipulation refers to the ability to manipulate, or change, 
 * the contents of a string in order to achieve a desired result.
 * 1. This can be done in a number of ways, 
 * including using operators or string methods.
 * 2. We will explore both of these approaches to string manipulation in order to give 
 * you a comprehensive understanding of how to work with strings in JavaScript.
 */

// 1. With Operators 
/**
 * One way to manipulate strings in JavaScript is through the use of operators. 
 * For example, you can use the "+" operator to concatenate, or join, two strings together:
 */
let str1 = "Hello";
let str2 = "World!";
let str3 = str1 + " " + str2; // "Hello World!"

// You can also use the "+=" operator to append a string to the end of an existing string:
let str4 = "Hello";
str4 += " World!"; // "Hello World!"

// 2. With String Methods
/**
 * In addition to using operators, 
 * you can also use string methods to manipulate strings in JavaScript. 
 * Some common methods include:
 */

/*
.substring(start, end): 
This method extracts a substring from a string, starting at the index 
specified by the "start" argument and ending at the index specified by the "end" argument.
*/
let str5 = "Hello World!";
let subStr = str5.substring(0, 5); // "Hello"
/*

.replace(search, replace): 
This method searches for a specified string or 
regular expression and replaces it with a specified string.
*/
let str6 = "Hello World!";
let newStr = str6.replace("World", "Universe"); // "Hello Universe!"

/*
.toUpperCase(): 
This method converts a string to all uppercase letters.
*/
let str7 = "Hello World!";
let upperCase = str7.toUpperCase(); // "HELLO WORLD!"

/*
.toLowerCase(): 
This method converts a string to all lowercase letters.
*/
let str8 = "Hello World!";
let lowerCase = str8.toLowerCase(); // "hello world!"

/**
 * It is important to note that string methods do not modify the original string, 
 * but rather return a new string with the desired manipulation applied. 
 * Therefore, if you want to save the manipulated string, you will need to assign it to a new variable.
 */