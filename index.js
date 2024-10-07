function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let heightM = height / 100;
  let bmi = weight / (heightM * heightM);
  console.log(`Your BMI is ${bmi}`);

  let bmiState;

  if (bmi < 18.5) {
    bmiState = "underwight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiState = "Healthy Weight";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    bmiState = "Overweight";
  } else {
    bmiState = "Above Obesity";
  }

  alert(`Your BMI is ${bmi}, which you are as ${bmiState}.`);
}

let isHealthy;

funcation;
if (age >= 19 && age <= 24) {
  isHealthy = bmi >= 19 && bmi <= 24;
} else if (age >= 25 && age <= 34) {
  isHealthy = bmi >= 20 && bmi <= 25;
} else if (age >= 35 && age <= 44) {
  isHealthy = bmi >= 21 && bmi <= 26;
} else if (age >= 45 && age <= 54) {
  isHealthy = bmi >= 22 && bmi <= 27;
} else if (age >= 55 && age <= 64) {
  isHealthy = bmi >= 23 && bmi <= 28;
} else if ((age = 65)) {
  isHealthy = bmi >= 24 && bmi <= 29;
} else {
  isHealthy = false;
}

let HealtSatus = isHealthy ? "Healthy" : "Not Healthy";
alert(`Your age and Your BMI and your Health  ${HealtSatus}, `);
