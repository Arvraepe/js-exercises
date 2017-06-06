const Mix = (superClass) => new MixinBuilder (superClass);
const MixinBuilder = class {

  constructor (superClass) {
    this.superClass = superClass;
  }

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superClass);
  }

};

const Age = (parent) => class extends parent {

  get legalAge () { return 18; }

  setAge (value) { this.age = value;  }
  getAge () { return this.age;  }

  isAdult () {
    return this.age >= this.legalAge;
  }

};

const Name = (parent) => class extends parent {

  setName (value) { this.name = value; }
  getName () { return this.name; }

};

const Base = class {};

const Person = class extends Mix(Base).with(Age, Name) {

  constructor (name, age) {
    super();

    this.setName(name);
    this.setAge(age);
  }

};

const Jos = new Person('Jos', 20);
console.log(Jos.name);
console.log(Jos.isAdult());