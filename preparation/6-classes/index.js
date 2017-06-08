const Person = class {

  constructor (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  agePlus10 () {
    return this.age + 10;
  }

};

const User = class extends Person {

  constructor (name, age, gender, userId) {
    super(name, age, gender);

    this.userId = userId
  }

  agePlus10 () {
    return super.agePlus10() + 10;
  }

};

const max = new User ('max', 26, 'male', 'uuid-1');

const list = [
  { name: 'Tom', gender: 'male', age: 20, id: '150feab7-6a45-408c-b0c4-8f5fb0496721', version: 2 },
  { name: 'Toon', gender: 'male', age: 17, id: '8a84556a-4556-42f0-87d1-bc36ac3d9352', version: 6  },
  { name: 'Henk', gender: 'male', age: 22, id: '3f5d6b09-0e76-400d-aee8-6c42d219636a', version: 4 },
  { name: 'Marie', gender: 'female', age: 18, id: 'cbb409aa-3cf4-4deb-ac41-dd777cbade94', version: 8 },
  { name: 'Evelien', gender: 'female', age: 26, id: '868576ba-fd06-46e0-a731-b15b1a53bfdb', version: 6 }
];

class People {

  constructor (people) {
    this.people = people;
  }

  // We can't use the "this" parameter here
  isMale (person) { return this.equals(person.gender, 'male'); }

  getAllMales () {
    // if we use the reference of the function in here
    return this.people.filter(this.isMale);
  }

  equals (a, b) {
    return a === b;
  }

}

const peopleObj = new People(list);

console.log(peopleObj.getAllMales());