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

function dominantDirection(string) {
    // create arrays to stroe ltr and rtl
    let ltr = [];
    let rtl = [];

    for (let i = 0; i < string.length; i++){
      let script = characterScript(string.charCodeAt(i));

      if (script !== null){
        if (script.direction === 'ltr'){
          ltr.push(script);
        } else if (script.direction === 'rtl'){
          rtl.push(script);
        }
      }
    }

    if (ltr.length > rtl.length){
      return 'ltr';
    } else {
      return 'rtl';
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
