// CODEWARSCHALLENGE 2024
// DAY 49/366
// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  return games.reduce((sum, [x, _, y]) => sum + (x > y ? 3 : x == y), 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
