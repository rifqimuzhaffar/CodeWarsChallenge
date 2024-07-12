// CODEWARSCHALLENGE 2024
// DAY 34/366
// DNA to RNA Conversion
// https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  return dna.replace(/t/g, "u").replace(/T/g, "U");
}

console.log(DNAtoRNA("adsadu"));
