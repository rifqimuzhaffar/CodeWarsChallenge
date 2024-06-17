// CODEWARSCHALLENGE 2024
// DAY 17/366
// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
  x = year / 100;
  return Math.ceil(x);
}

console.log(century(1900));
