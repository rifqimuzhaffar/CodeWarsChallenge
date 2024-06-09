// CODEWARSCHALLENGE 2024
// DAY 10/366
// is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086

// DESCRIPTION
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

const isDivisible = (n, x, y) => (n % x == 0 && n % y == 0 ? true : false);

console.log(isDivisible(12, 3, 4));
