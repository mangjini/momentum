const a = 7;
const b = 5;
let myName = "mangji";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "nicolas";

console.log(myName);

// restart

Boolean;

const amIFat = true;
let something;
null;
false;

console.log(amIFat);
console.log(something);

const mon = "mon";
const tue = "tue";
const wed = "wed";

const days = [mon, tue, wed];

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(days, daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

// restart

const playerName = "Nico";
const playerPoints = 1212121;
const playerHandsome = true;
const plyerFat = "little bit";

const players = ["nico", 1212, false, "little bit"];

const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
player.name;
console.log(player["name"]);

player.fat = false;

console.log(player);
// new property add
player.lastName = "potato";

console.log(player);

// 기존 플레이어 포인트에 15더하고 싶을 때 //
player.points = player.points + 15;

console.log(player.points);

// new chapter
function sayHello(nameOfPerson, age) {
  console.log(nameOfPerson);
  console.log("hello my name is " + nameOfPerson + " and I'm" + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

// calculator

function plus(FirstNumber, SecondNumber) {
  console.log(FirstNumber + SecondNumber);
}

function divide(a, b) {
  console.log(a / b);
}
plus(3, 60);
divide(50, 10);

const player_ = {
  name: "mangi",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};

console.log(player_.name);
player_.sayHello("lynn");

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(3, 8);
calculator.minus(8, 5);
calculator.divide(10, 5);
calculator.powerOf(2, 4);
