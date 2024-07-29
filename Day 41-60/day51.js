// CODEWARSCHALLENGE 2024
// DAY 51/366
// Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  return array
    ? array
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;
}

console.log(sumArray([3, 5]));
