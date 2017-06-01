/*

    Exercise 3: Creating an Optional data structure

 */

const Optional = (value) => ({

  getOrElse: (def) => value ? value : def,

  hasValue: () => !!value,

  map: (fn) => !!value ? Optional(fn(value)) : Optional(null)

});

const person = {
  address: {

  }
};

console.log(Optional(person).map((p) => p.address).map((a) => a.street).getOrElse('There is no street'));