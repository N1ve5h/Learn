const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const double = numbers.map(num => (num * 2))

console.log(double);
// Expected Output:
//[
//  2,  4,  6,  8, 10, 12, 14,
//  16, 18, 20, 22, 24, 26, 28,
//  30, 32, 34, 36, 38, 40
//]
