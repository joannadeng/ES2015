// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// Refactor the above code to use two arrow functions. Turn it into a one-liner.
const double = arr => arr.map(val=> val * 2)



// ## **Refactor the following function to use arrow functions:**
// Replace ALL functions with arrow functions:
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

// solution 1
// const squarAndFindEvens = numbers => {
//     var squares = numbers.map(num => num ** 2);
//     var evens = squares.filter(square => square % 2 === 0);
//     return evens;
// }

// solution 2
const squarAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);
