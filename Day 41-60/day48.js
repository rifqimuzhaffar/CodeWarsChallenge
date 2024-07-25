// CODEWARSCHALLENGE 2024
// DAY 48/366
// Reversed Words
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("yoda doesn't speak like this"));
