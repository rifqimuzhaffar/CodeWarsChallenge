// CODEWARSCHALLENGE 2024
// DAY 35/366
// Count by X
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }

const countBy = (x, n) => {
  return [...Array(n)].map((el, i) => ++i * x);
};

console.log(countBy(2, 5));
