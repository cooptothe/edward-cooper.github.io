/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, str){
   // create for loop to look through array
   for (var i = 0; i < arr.length; i++){
    // create if statment to see if str matches an animals name
    if (str === arr[i].name){
        return arr[i];
    }
   }
   return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(arr, str, obj){
// create for loop to look though animals
for (var i = 0; i < arr.length; i++){
    // create if statement too see if name matches animal
    if (str === arr[i].name){
        // reassign array to equal obj
        arr[i] = obj; 
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(arr, str){
    // create for loop to look though array
for (var i = 0; i < arr.length; i++){
    // create if statement too see if str matches animal name
    if (str === arr[i].name){
        // use splice method to remove name
        arr.splice(i, 1)
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, obj){
    // create for loop to iterate though array
    for (var i = 0; i < arr.length; i++) {
        // create if statement to check length of obj and to deterimine if it has a unique name
        if (obj.name.length > 0 && obj.species.length > 0 && obj.name !== arr[i].name){
            // use push method to add object
          arr.push(obj);
        } // return null if else
        else {
            return null;
        }
      }
    }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
