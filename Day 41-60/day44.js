// CODEWARSCHALLENGE 2024
// DAY 44/366
// If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// const countSheep = function (num) {
//   let sheep = [];
//   for (i = 1; i <= num; i++) {
//     sheep.push(i + " sheep...");
//   }
//   return sheep.join("");
// };

const countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str = str + i + " sheep...";
    // str += `${i} sheep...`;
  }
  return str;
};

console.log(countSheep(3));
