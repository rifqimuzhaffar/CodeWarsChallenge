// CODEWARSCHALLENGE 2024
// DAY 52/366
// Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// DESCRIPTION:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
  if (l !== w) {
    return (l + w) * 2;
  }
  return l * w;
};

console.log(areaOrPerimeter(3, 3));
