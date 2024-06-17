// CODEWARSCHALLENGE 2024
// DAY 16/366
// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// DESCRIPTION
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  let x = name.split(" "); // pecah string menjadi array dengan 2 index
  return (x[0][0] + "." + x[1][0]).toUpperCase(); //ambil nilai x index pertama dan huruf pertama dan index ke2 dan huruf pertama
}

console.log(abbrevName("Sam Harris"));
