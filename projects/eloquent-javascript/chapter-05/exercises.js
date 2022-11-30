// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
// return arr using reduce method taking in a function with two parameters that represent the sum and value of array
return (arr.reduce(function(sum, value){
  // flatten sum and value using the concat method
  return sum.concat(value)
}));
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  // create 3 seperate functions: `test`, `body` & `update`.
  for (let n = value; test(n); n = update(n)) {
    // these functions operate on the argument passed to `value`.
      body(n);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, test) {
  // create for of loop to iterate through each element of array
  for (let element of arr) {
    // determine if the element doesn't pass test
      if (!test(element)) {
        // return false 
          return false;
      }
  }
// return true if all elements pass
  return true;
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
    let writingDirections = countBy(text, char => {
        // `char.codePointAt(0)` returns the Unicode code we can use it as an argument to find the script of the given character.
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : null;
    }).filter(direction => direction.name !== null);
    
    // `writingDirections` is an empty array, `text` doesn't contain any characters belongs to any script specified in Unicode charset).
    if (!writingDirections.length) {
        return null;
    }
    else {
        // `writingDirection` object which represents the dominant direction of the `text` is returned when we use reduce() on `writingDirections`.  
        const {name: dominantDirection} = writingDirections.reduce((dominantDirection, writingDirection) => {
            return (writingDirection.count > dominantDirection.count) ? writingDirection : dominantDirection;
        });

        return dominantDirection;
    }
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
