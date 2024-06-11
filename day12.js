// CODEWARSCHALLENGE 2024
// DAY 12/366
// Beginner Series #2 Clock
// https://www.codewars.com/kata/568d0dd208ee69389d000016

const past = (h, m, s) => h * 3.6e6 + m * 6e4 + s * 1e3;

console.log(past(0, 1, 1));
