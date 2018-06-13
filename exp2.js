// Write a function that takes in an array and returns a new array with each number tripled. For example, given [3, 1, 5, 10], the function should return [9, 3, 15, 30].

// var arr = [3, 1, 5, 10];

// function tripleArray(array) {
//   var newArr = [];

//   for (var i = 0; i <= array.length - 1; i++) {
//     newArr.push(array[i] * 3);
//   }
//   return newArr;
// }

// console.log(tripleArray(arr));



// Write a function that takes in an array of numbers and returns a new array of numbers less than 5. For example, given [4, 10, 8, 3], the function should return [4, 3].

// var array = [1,2, 5,6,7,7,8,8,9,10];

// function lessThanFive(input) {
//   var newArray = [];

//   for (var i = 0; i <= input.length - 1; i++) {
//     if (input[i] < 5) {
//       newArray.push(input[i]); 
//     }
//   }
//   return newArray;
// }

// console.log(lessThanFive(array));



//Write a function that takes an array of numbers and returns the sum of all the numbers. For example, given [3, 9, 1], the function should return 13.

// var array = [1,3,9];

// function damnitJosh(input) {
//   var total = 0;
  
//   for (var i = 0; i < input.length; i++) {
//     (total += input[i]);
//   }  
//   return total;
// }

// console.log(damnitJosh(array));

// function sumAll(input) {
//   var newArray;

//   newArray = input.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
//   });
//   return newArray;
// }

// console.log(sumAll(array));


// Write a function that takes in an array of strings and returns all the strings combined into a single string. For example, given [“a”, “b”, “c”], the function should return “abc”.
// var list = ["words", "bananas", "steve"];

// function combineString(input) {
//   var giantWord = "";

//   for (var i = 0; i < input.length; i++) {
//     giantWord += input[i];
//   }
//   return giantWord;
// }

// console.log(combineString(list));

// Write a function to solve FizzBuzz (print out the numbers 1 through 100, except multiples of 3 print “Fizz”, multiples of 5 print “Buzz”, and multiples of 15 print “FizzBuzz”).

function fizzBuzzer() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      return ("fizzbuzz");
    }
    else if (i % 3 === 0) {
      return ("fizz");
    }
    else if (i % 5 === 0) {
      return ("buzz");
    }
    else  {
      i;
    }  
  }
}



