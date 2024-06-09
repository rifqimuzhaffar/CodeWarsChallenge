// CODEWARSCHALLENGE 2024
// DAY 11/366
// Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
  if (d < 3) {
    return 40 * d;
  }
  if (d >= 3 && d < 7) {
    return 40 * d - 20;
  }
  if (d >= 7) {
    return 40 * d - 50;
  }
}

console.log(rentalCarCost(9));
