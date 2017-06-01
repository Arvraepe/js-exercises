/*

    Classes are part of ECMAScript 2015 and are syntactic sugar for prototypal inheritance.
    So it does NOT introduce OO-programming. This is very important to note.

 */



var Rectangle = function (id, x, y, width, height) {
  Shape.call(this, id, x, y);
  this.width  = width;
  this.height = height;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var Circle = function (id, x, y, radius) {
  Shape.call(this, id, x, y);
  this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


// ES 6

class Team {

  private name;
  private players = [];

  constructor (name, players) {
    this.name = name;
    this.players = players;
  }

  isNotEmpty (something) { return !!something; }

  getNameFromPlayer (player) {
    return this.isNotEmpty(player.name) ? player.name : 'Unknown';
  }

  getPlayerNames () {
    return this.players.map((player) => {
      return this.getNameFromPlayer(player);
    });
  }

}

const players = [
  { name: 'Tom', age: 18, injured: false },
  { name: 'Piet', age: 17, injured: false },
  { name: 'Peter', age: 19, injured: false },
  { name: 'Jens', age: 21, injured: true },
  { name: 'Jens', age: 21, injured: false },
  { name: 'Tim', age: 23, injured: false },
  { name: 'John', age: 29, injured: true }
];
const myTeam = new Team('Shotterkes', players);