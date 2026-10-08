// [1-10]

// input from terminal

const weight = process.argv[2];
const height = process.argv[3];

function calculateBmi(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

console.log(calculateBmi(weight, height));

// bmi er upor depend WHO er bmi koto hole take underweight, fit, overweight bolbo. either the person is underweight or overweight or fit.