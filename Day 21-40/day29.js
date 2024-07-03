// CODEWARSCHALLENGE 2024
// DAY 29/366
// A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle,

function findNeedle(haystack) {
  const index = haystack.findIndex((e) => e == "needle");
  return `found the needle at position ${index}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
