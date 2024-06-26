// CODEWARSCHALLENGE 2024
// DAY 24/366
// Calculate average array
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce((acc, curr) => acc + curr) / array.length;
}
console.log(findAverage([1, 1, 1]));
