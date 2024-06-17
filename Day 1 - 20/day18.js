// CODEWARSCHALLENGE 2024
// DAY 18/366
// Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c

// DESCRIPTION
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

console.log(hoopCount(11));
