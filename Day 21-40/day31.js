// CODEWARSCHALLENGE 2024
// DAY 31/366
// Invert values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  // jika input array [kosong]
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }
  // kalau isi
  const countPositives = input.filter((x) => x >= 1).length;
  const sumNegatives = input.filter((x) => x < 0).reduce((a, c) => a + c, 0);
  return [countPositives, sumNegatives];
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);

console.log(countPositivesSumNegatives([]));
