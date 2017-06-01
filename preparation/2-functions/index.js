// Declarations

function x (a) { return a;  }

const y = function (b) { return b; };

// Favourite notation -> watch out with "this" -> notation really shows you that a function is a value
const z = (c) => c;

// returning an object in an arrow function = funky syntax... but it has to be
const a = (m, n) => {
  return m + n;
};

const b = (m, n) => ({ solution: m + n });

// Default parameters (Edge+ no IE support, not even 11)

const c = (a = 1) => a;
console.log('c', c(2), c());

// ES5 version
function d (a) {
  // add a default value
  a = a || 1;

  return a;
}

// Bind, Call, Apply
const add = (n, m) => n + m;
const add10 = add.bind(null, 10); // the "null" is the value for the "this" variable

console.log('add10(2)', add10(2));
console.log('add.apply(null, [10, 2])', add.apply(null, [10, 2]));
console.log('add.call(null, 10, 2)', add.call(null, 10, 2));

// Rest parameter & spread
const addPlayersToTeam = (team, ...players) => players.forEach((player) => team.players.push(player));
// ES5 we would need to use arguments.slice(1); to get the players

const team = { players: [] };
const players = ['Courtois', 'Mertens', 'Hazard', 'De Bruyne'];

addPlayersToTeam(team, ...players); // spreads the array
addPlayersToTeam(team, 'Lukaku', 'Benteke', 'Witsel', 'Alderweireld');

console.log('Team: ', team);

// Functions as first-class citizens && higher order functions
const echo = (txt) => console.log(txt);
const execute = (func, value) => func(value);

execute(echo, 'Hello world');

// Currying is a form of higher order function

const curriedAdd = (n) => (m) => n + m; // syntax for functions returning functions is amazing with the arrow notation.
console.log('curriedAdd: ', curriedAdd(1)(2)); // Practical use later on!

// A higher order function is a function that either takes a function as a parameter or returns a function
// Higher order functions are also available in ES5!! Only they look a bit uglier.

const curriedAddES5 = function (n) {
  return function (m) {
    return n + m;
  }
};
console.log('curriedAddES5: ', curriedAddES5(1)(2));

// But it works... currying is very useful when starting with functional programming (see later problems)
