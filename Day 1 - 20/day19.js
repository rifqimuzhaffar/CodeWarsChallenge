// CODEWARSCHALLENGE 2024
// DAY 19/366
// Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  }
  if (bmi <= 25) {
    return "Normal";
  }
  if (bmi <= 30) {
    return "Overweight";
  }
  if (bmi > 30) {
    return "Obese";
  }
  return bmi;
}

console.log(bmi(80, 1.8));
