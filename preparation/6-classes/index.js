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

