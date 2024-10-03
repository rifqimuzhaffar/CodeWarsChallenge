// CODEWARSCHALLENGE 2024
// DAY 59/366
// Find numbers which are divisible by given number
// https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor) {
  return numbers.filter((x) => x % divisor === 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
