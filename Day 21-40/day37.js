// CODEWARSCHALLENGE 2024
// DAY 37/366
// Convert a string to an array
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((acc, curr) => acc + curr);
// }

function arrayPlusArray(arr1, arr2) {
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    result1 += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    result2 += arr2[j];
  }
  return result1 + result2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
