// CODEWARSCHALLENGE 2024
// DAY 6/366
// Are You Playing Banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832

// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === "r") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

// CleanCode
const areYouPlayingBanjo = (name) =>
  name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";

console.log(areYouPlayingBanjo("ringo"));
console.log(areYouPlayingBanjo("aigo"));
