// CODEWARSCHALLENGE 2024
// DAY 60/366
// Remove exclamation marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

console.log(removeExclamationMarks("Hello World!"));
