// CODEWARSCHALLENGE 2024
// DAY 46/366
// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// const min = list => list.sort((a, b) => a - b)[0];
// const max = list => list.sort((a, b) => b - a)[0];

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
