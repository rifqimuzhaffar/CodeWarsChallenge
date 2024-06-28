// CODEWARSCHALLENGE 2024
// DAY 26/366
// Convert number to reversed array of digits
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// DESCRIPTION
// Given a random non-negative number, you have to return the digits of this number
// within an array in reverse order.

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

console.log(digitize(35231));
