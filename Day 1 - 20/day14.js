// CODEWARSCHALLENGE 2024
// DAY 14/366
// Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// cara 1
const stringToNumber = function (str) {
  return str * 1;
};

// cara 2
// var stringToNumber = function(str){
//     return parseInt(str);
//   }

// cara 3
// const stringToNumber = function(str){
//     return Number(str);
//   }

console.log(stringToNumber("1234"));
