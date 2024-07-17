// CODEWARSCHALLENGE 2024
// DAY 43/366
// Apakah kamu akan berhasil?
// https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

console.log(zeroFuel(100, 50, 1));
