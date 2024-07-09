// CODEWARSCHALLENGE 2024
// DAY 33/366
// You only need one - Beginner
// https://www.codewars.com/kata/57cc975ed542d3148f00015b

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

const check = (a, x) => a.includes(x);

console.log(check([11, 22], 0));
