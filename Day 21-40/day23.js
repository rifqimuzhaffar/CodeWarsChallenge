// CODEWARSCHALLENGE 2024
// DAY 23/366
// Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// DESCRIPTION
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

// function sum(numbers) {
//   var total = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

function sum(numbers) {
  const initialValue = 0;
  return numbers.reduce((acc, curr) => acc + curr, initialValue);
}

console.log(sum([1, 5.2, 4, 0, -1]));
