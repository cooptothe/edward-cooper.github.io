// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./edward-cooper.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function(customer){
    return customer.gender === "male"; 
}); 

    return males.length; 
};


var femaleCount = function(array){
    let females = _.filter(array, function(customer){
        return customer.gender === "female";
        })
        return females.length;
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumalator, current){
        if (accumalator.age > current.age){
            return accumalator;
        } else {
            return current;
        }
    })
    return oldest.name;
};


var youngestCustomer  = function(array){
    let youngest = _.reduce(array, function(accumalator, current){
        if (accumalator.age < current.age){
            return accumalator;
        } else {
            return current;
        }
    })
    return youngest.name;
};;

var averageBalance = function(array){
    // use reduce on array
    let sum = _.reduce(array, function(accum, current){
        // return param divided by array length
        return accum + current.balance.replace(/[$,]/g, '') / array.length ;
    }, 0);
         /// return sum
    return sum;
};
var firstLetterCount = function(array, letter){
    let counter = _.filter(array, function(customer){
       return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
    });
    return counter.length;
};

var friendFirstLetterCount = function(array, customer, letter){
   // iterate through array 
   for (let i = 0; i < array.length; i++){
    // determine if array name is = to customer
    if (array[i].name === customer){
    // use filter to iterate though array to detemine if name starts with letter
        let friendNames = _.filter(array[i].friends, function(friends){
            if (friends.name.charAt(0).toLowerCase() === letter.toLowerCase()){
                return true;
            }
        })
        return friendNames.length;
    }
   }
         
}
var friendsCount = function(array, name){
    // return the array filtered using filter method
    return _.filter(array, function(a){
        // use map to iterate through array friends
        return _.map(a.friends, function(b){
            // return friends name that includes the input name
            return b.name}).includes(name)
            // i ended up using the native map method because it kept returning the entire array instead of the names themselves
    }).map(a => a.name);
}

var topThreeTags = function(arr){
    // create output array
    let output = [];
    // create object for all tags
    let tagMap = {};
    // iterate through array using each
    _.each(arr, function(customer) {
        // iterate through each tag using each
      _.each(customer.tags, function(tag) {
        // for every tag in the array increment + 1
        if (tagMap[tag]){
            tagMap[tag]++;
        } else {
            tagMap[tag] = 1;
        }; 
      });
    }); 
    let max = 0;
    let mostCommonTags = [];
    // use for loop to iterate through keys 
    for (let tag in tagMap) {
        // determine if tagMap is greater than max
      if (tagMap[tag] > max) {
        // reassign max to equal tagMap
        max = tagMap[tag];
        // reassign mostCommonTags equal tag
        mostCommonTags = [tag];
      } // else push tag into array
      else if (tagMap[tag] === max) {
        mostCommonTags.push(tag);
      }
    } // return mostCommonTags array
    return mostCommonTags;
  }

function genderCount(arr) {
    // use reduce on array
    return _.reduce(arr, function(acc, curVal){
        // determine if current value is male
        if (curVal.gender === 'male') {
            acc.male++;
        } // determine if current value is female
        else if (curVal.gender === 'female') {
            acc.female++;
        } // if else
        else {
            acc["non-binary"]++;
        }
        return acc;
    }, {male: 0, female: 0, ["non-binary"]: 0});
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
