const R = require('ramda');

/*
      List comprehensions are one of the most important things in javascript.

      The importance of this cannot be stressed enough. The following functions are being used on a daily basis
      might even be 50% of the time that you are mutating, interpreting, looping over lists.

      most important functions: filter, map, reduce (chainable functions)
      useful for validation: some, every (not chainable)

      not used that often (or used improperly): forEach

      Note that these methods are immutable... they do not change the array itself, they create a shallow copy

  */

// data set
const people = [
  { name: 'Tom', gender: 'male', age: 20, id: '150feab7-6a45-408c-b0c4-8f5fb0496721', version: 2 },
  { name: 'Toon', gender: 'male', age: 17, id: '8a84556a-4556-42f0-87d1-bc36ac3d9352', version: 6  },
  { name: 'Henk', gender: 'male', age: 22, id: '3f5d6b09-0e76-400d-aee8-6c42d219636a', version: 4 },
  { name: 'Marie', gender: 'female', age: 18, id: 'cbb409aa-3cf4-4deb-ac41-dd777cbade94', version: 8 },
  { name: 'Evelien', gender: 'female', age: 26, id: '868576ba-fd06-46e0-a731-b15b1a53bfdb', version: 6 }
];

// FILTER

// The parameter should be read as "something with the property gender" it could be a person, or maybe an animal? Same rules apply.
const isMale = ({ gender }) => gender === 'male';
const isFemale = ({ gender }) => gender === 'female';
const isAdult = ({ age }) => age >= 18;

const males = (people) => people.filter(isMale);
const females = (people) => people.filter(isFemale);
const adults = (people) => people.filter(isAdult);

// we can use output of other filter as input
const adultFemales = adults(females(people));
const adultMales = adults(males(people));

// Note that this is the key of functional programming. The functions are your atomic building blocks!

// SOME and EVERY
const areAllFemalesAdults = (people) => females(people).every(isAdult);
const areSomeMalesAdults = (people) => males(people).some(isAdult);

// Note that these functions do not require the people input parameter... but this makes them pure functions!
// pure functions are functions for the same input x generate the same output y
// these functions are great for the compiler and runtime because it can be severely optimized (e.g. memoization)!

// MAP or "transform", "collect" transforms one item of a list to something else (list dimensions stay the same)
const asName = ({ name }) => name;

const allMaleNames = (people) => males(people).map(asName);
const allFemaleNames = (people) => females(people).map(asName);

// REDUCE or "fold" reduces a list to a single item (string, object, number).
// Can also be used to do a filter and map in one statement... but that is not recommended...
const byAge = (total, { age }) => total + age;
const totalAgeOfMales = (people) => males(people).reduce(byAge, 0);
const totalAgeOfFemales = (people) => females(people).reduce(byAge, 0);

// What if you want to transform your list of people to a hashmap of id -> version, which is sometimes called an identifiable.
// Since assignment
const byIdentifiable = (map, { id, version }) => {
  map[id] = version;
  return map;
};

const toIdentifiableMap = (people) => people.reduce(byIdentifiable, {});

// A more advanced (but realistic) example
// Splitting into functions can be excellent for re-usability of your code. But something you will get problems.
// However, nothing that some currying can't solve...

const hasPartOfName = (partOfName) => ({ name }) => name.startsWith(partOfName);
const withPartOfName = (people, partOfName) => people.filter(hasPartOfName(partOfName));

// Note that this is just a case of a partially applied function. "hasPartOfName" requires two parameters,
// but the filter function only provides the second one. First we need to partially apply the "partOfName"
// that returns a function that is used by the filter (hasPartOfName) is therefore a Higher Order Function (returns a function)
// you can look at the function as a "function builder"

// Also note that hasPartOfName cannot be called like this anymore: hasPartOfName('name', person);
// JavaScript does not natively support curried functions, unlike other languages such as Scala, Haskell, a.o.
// You can use Ramda to bypass this problem (more info in the functional programming exercise)

const curriedHasPartOfName = R.curry((partOfName, { name }) => name.startsWith(partOfName));
const withCurriedPartOfName = (people, partOfName) => people.filter(curriedHasPartOfName(partOfName));

// which results in exactly the same... too bad that JavaScripts forces you to use an external library to achieve this result

// Last but not least... destruction is also available for arrays
const [first, ...others] = people;


