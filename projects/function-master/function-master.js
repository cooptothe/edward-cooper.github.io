//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////




function objectValues(object) {
let arrObj = [];
for (var key in object){
    arrObj.push(object[key]);
}
return arrObj;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
     // create output variable
let outp = "";
// create variable arr and assign to the object keys
let arr = Object.keys(object);
// create for loop to iterate through object keys
for (var i = 0; i <= arr.length - 2; i++){
    // reassign output variable to add keys followed by a space
    outp = outp + arr[i] + " ";
} // return output
outp += arr[arr.length - 1];
return outp;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create output variable
    let outp = "";
    // create variable arr and assign to the object values 
    let arr = Object.values(object);
    // create for loop to iterate through object values
    for (var i = 0; i <= arr.length - 2; i++){
        // create if statement to determine if objects values are a string
        if (typeof arr[i] === 'string'){
            // reassign output variable to add values followed by a space if its a string
        outp = outp + arr[i] + " ";}
    } // return output
    outp += arr[arr.length - 1];
    return outp;
    }
    
    

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true){
        return 'array';
    } else {
return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // use sting method to split string by space
    string = string.split(" ");
    // use for loop to iterate through string 
    for (let i = 0; i < string.length; i++){

    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
   return string.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// assign var to equal object name, uppercase first letter and add slice method to remove the old character
    let name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
    // return string with new variable
    return "Welcome" + " " + name + "!";
    }

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
// assign var to equal object name, uppercase first letter and add slice method to remove the old character
let name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
// do the same concept for the object's species
let species = object.species.charAt(0).toUpperCase() + object.species.slice(1) 
// return string with new variables
return name + " " + "is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // create if statement and use hasOwnProperty method to test if the object has array
    if (object.hasOwnProperty('noises') && object.noises.length > 0){
        // return noises seperated by space using join method
        return object.noises.join(" ")
    } // use if statement to check if array is empty
    else if (object.hasOwnProperty('noises') && object.noises.length === 0){
        //return string
        return "there are no noises"
    }
    // return string if else
    else {
        return "there are no noises"
    }
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// create if statement that determines if string includes word using include method
if (string.includes(word)){
    return true;
} // return false if else
else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// push name into friends
object.friends.push(name);
// return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // create if statement to check if object has property of friends and is an array
    if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
        // use for loop to iterate through the friends array
        for(let i = 0; i < object.friends.length; i++) {
            //use if statement to determine if name if equal to any of the friends inside the array
          if(name === object.friends[i]) {
            // return true
            return true;  
          }
        }    
      }  // return false if else
     return false;   
    } 
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create array to hold list of names and the result
    let nameList = [];
    let result = [];
    // create variable to return null
    let current = null;
    // use for loop to iterate through array
    for (let i = 0; i < array.length; i++){
        // use if statement to determine if name equals name in array
        if (name === array[i].name){
            // if true assign current variable to equal array
            current = array[i];
            // if else push array of names into the nameList array
        } else {
            nameList.push(array[i].name);
        }
    }
    // return the nameList if current equals null
    if (current === null){
        return nameList;
    }
    // create for loop to iterate through nameList array
    for (let i = 0; i < nameList.length; i++){
        // use if statement to determine if the current friends has an index of nameList array
        if(current.friends.indexOf(nameList[i]) == -1){
            // push nameList into result
            result.push(nameList[i]);
        }
    }
    // return result
    return result;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, arr) {
    // iterate though array
    for (let i = 0; i < arr.length; i++){
        // determine if object has property of array on the current index
    if (object.hasOwnProperty(arr[i])) {
        // use delete operator to delete property of object using bracket notation 
        delete object[arr[i]];
      }
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // use filter function to check if element is already found in the arrays index
return array.filter((el, index) => array.indexOf(el) === index);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}