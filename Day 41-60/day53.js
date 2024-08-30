// CODEWARSCHALLENGE 2024
// DAY 53/366
// Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072

const updateLight = (current) => {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else {
    return "green";
  }
};

console.log(updateLight("green"));
