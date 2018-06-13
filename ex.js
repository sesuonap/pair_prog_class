// write a function that reverses a string (without reverse method)

// var randomStr = "steve";

// function reverse(input) {
//   var newStr = '';
  
//   for (var i = input.length - 1; i >= 0; i--)
//     newStr += input[i];
//   return newStr;
// }

// console.log(reverse(randomStr));



// Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

// var str = "avocados have many abarths";

// function countAllAs() {
//   var count = 0;

//   for (var i = 0; i < str.length; i++) {
//     if(str[i] === "a") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countAllAs();


// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

var array = [1,2,3,4,5,6,7,8,9];
var findThis = 7;

function searchAndDestroy(array,findThis) {
  var found;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === findThis) {
      found = i;
    }
  }
  return found;
}

console.log(searchAndDestroy(array,findThis));

