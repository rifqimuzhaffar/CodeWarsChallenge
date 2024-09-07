// CODEWARSCHALLENGE 2024
// DAY 54/366
// Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

console.log(greet("Daniel", "Daniel"));
