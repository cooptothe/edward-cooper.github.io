/**
 * LOOPS:
 * 0. Loops are a fundamental programming concept that allow us to repeatedly 
 * execute a block of code until a certain condition is met.
 * 1. They are often used to iterate over collections of data, such as arrays or objects, 
 * and perform the same operation on each element.
 * 2. There are several different types of loops in JavaScript, 
 * each with its own specific use cases.
 */

// 1. while, for, for-in loops
/**
 * While loops are used to repeatedly execute a block of code 
 * as long as a certain condition is true.
 */
// code example
let i = 0;
while (i < 5) {
console.log(i);
i++;
}
// Output: 0, 1, 2, 3, 4

/**
 * For loops are similar to while loops, but they provide a more concise syntax 
 * and are often used when we know exactly how many times we want to loop.
 */
// code example
for (let i = 0; i < 5; i++) {
console.log(i);
}
// Output: 0, 1, 2, 3, 4

/**
 * For-in loops are used to iterate over the properties of an object.
 */
// code example 
const object = {a: 1, b: 2, c: 3};
for (let key in object) {
console.log(key + ": " + object[key]);
}
// Output: "a: 1", "b: 2", "c: 3"

// 2. Looping Any Number Of Times
/**
 * One way to loop any number of times in Javascript is through the use of the for loop. 
 * The for loop consists of three parts: 
 * the initialization, the condition, and the final expression.
 */
// code example 
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
// This code will log the numbers 0 through 9 to the console.

/**
 * To loop and count up to a specific limit, 
 * we can use the for loop and specify the limit in the condition.
 */
// code example
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
// This code will log the numbers 1 through 5 to the console.

/**
 * To loop and count down to 0, 
 * we can use the for loop and specify a decreasing increment.
 */
// code example 
for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
  // This code will log the numbers 5 through 0 to the console.

  // 3. Loop Over an Array Forwards and Backwards
  /**
   * To loop over an array in JavaScript, we can use the for loop 
   * and access each element using the array index.
   */
  // code example
  const myArray = ['apple', 'banana', 'cherry'];
    for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
} 
// This code will log 'apple', 'banana', and 'cherry' to the console.

/**
 * To loop over an array backwards,
 * we can use the for loop and start at the end of the array.
 */
// code example
const myArray2 = ['apple', 'banana', 'cherry'];
for (let i = myArray2.length - 1; i >= 0; i--) {
  console.log(myArray2[i]);
}
// This code will log 'cherry', 'banana', and 'apple' to the console.

// 4. Loop Over an Object
/**
 * Another common use for loops is to iterate over the properties of an object. 
 * To do this, you can use a for-in loop. 
 * The for-in loop iterates over the enumerable properties of an object, 
 * in the order they were defined.
 */
// code example
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  // This code will log each property name and value in the person object to the console.

