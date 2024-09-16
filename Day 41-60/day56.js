// CODEWARSCHALLENGE 2024
// DAY 56/366
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  return Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length);
}

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
