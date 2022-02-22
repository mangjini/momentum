// what is the return ?
const ages = 96;
function calculatorKrAge(ageOfForeiner) {
  return ageOfForeiner + 2;
}

const krAge = calculatorKrAge(ages);
console.log(krAge);

const mang = {
  hi: function (a, b) {
    console.log("gdfdg");
    return a + b;
  },
};

// new chapter - conditionla

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("retry");
  /// condition=== true
} else {
  console.log("Thank you");
}

// conditional-2

if (isNaN(age) || age < 0) {
  console.log("retry");
  /// condition=== true
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
} else {
  console.log("you can't drink ");
}

true || true === true;
false || true === true;
false || false === false;

// only true && true === true

console.log(parseInt("hello"));
