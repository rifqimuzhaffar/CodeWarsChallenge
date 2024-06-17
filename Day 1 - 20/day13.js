// CODEWARSCHALLENGE 2024
// DAY 13/366
// Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// DESCRIPTION
// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x
    .split(" ") // split yaitu pecahkan string menjadi array dan yang menerima parameter space (' ')
    .join(""); // join arraynya agar berubah menjadi string kembali
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
