// CODEWARSCHALLENGE 2024
// DAY 15/366
// Counting sheep...
// https://www.codewars.com/kata/544675c6f971f7399a000e79

// DESCRIPTION
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps([undefined, null, false, true]));
