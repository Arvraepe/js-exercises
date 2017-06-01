// functions in objects (because they are just values)

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const subtract = (x, y) => x - y;

const calculator = { add, multiply, divide, subtract };

const calculatorES5 = {
  add: add,
  multiply: multiply,
  divide: divide,
  subtract: subtract
};

console.log('add: ', calculator.add(1,2));

// Defining properties with some useful configuration options

Object.defineProperty(calculator, 'version', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: '1.0.0'
});

calculator.version = 1; // Does absolutely nothing
console.log('Version:', calculator.version);

// Define fancy getters and setters (useful for framework design)

let x = 0;
let changesToX = 0;
let lookupsForX = 0;

Object.defineProperty(calculator, 'something', {
  get: () => {
    lookupsForX++;
    return x;
  },
  set: (value) => {
    changesToX++;
    x = value;
  },
  enumerable: true,
  configurable: true
});

console.log('Get x: ', calculator.something);
calculator.something = 1;
console.log('Get x after change: ', calculator.something);
console.log('Changes to x: ', changesToX);
console.log('Lookups for x: ', lookupsForX);

// Freezing objects (almost immutability)
calculator.array = [];
Object.freeze(calculator);
calculator.y = 1; // does absolutely nothing
calculator.array.push(1); // is still working! Mutations work on arrays / objects (const principle)

console.log('calculator.y: ', calculator.y);
console.log('calculator.array: ', calculator.array);

// for full immutability: https://facebook.github.io/immutable-js/

// Object Destruction
const john = { firstName: 'John', lastName: 'Doe', height: 1.94, weight: 80, age: 24, job: 'Developer'  };
const calculateBMI = ({ height, weight }) => Math.round(weight / Math.pow(height, 2));

// this is also valid syntax
const calculateBMI2 = (person) => {
  const { height, weight } = person;
  return Math.round(weight / Math.pow(height, 2));
};

// Or this
const calculateBMI3 = ({ height, weight }) => {
  return Math.round(weight / Math.pow(height, 2));
};

console.log('BMI John: ', calculateBMI(john));
console.log('BMI2 John: ', calculateBMI2(john));