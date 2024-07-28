// CODEWARSCHALLENGE 2024
// DAY 50/366
// Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  if (score >= 90) {
    return "A";
  }
  if (score >= 80 && score < 90) {
    return "B";
  }
  if (score >= 70 && score < 80) {
    return "C";
  }
  if (score >= 60 && score < 70) {
    return "D";
  }
  return "E";
}

console.log(getGrade(95, 90, 93));
