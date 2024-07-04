// CODEWARSCHALLENGE 2024
// DAY 30/366
// Invert values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const invert = (array) => array.map((x) => x * -1);

console.log(invert([1, 2, 3, 4, 5]));
