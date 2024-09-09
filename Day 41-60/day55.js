// CODEWARSCHALLENGE 2024
// DAY 55/366
// Be Concise IV - Index of an element in an array
// https://www.codewars.com/kata/5703c093022cd1aae90012c9

const find = (array, element) =>
  array.includes(element) ? array.indexOf(element) : `Not found`;

let array = [2, 3, 5, 7, 11];

console.log(find(array, 2));
