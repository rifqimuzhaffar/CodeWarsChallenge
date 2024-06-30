// CODEWARSCHALLENGE 2024
// DAY 27/366
// How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!

function betterThanAverage(classPoints, yourPoints) {
  let sum =
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;
  return yourPoints > sum ? true : false;
}

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
