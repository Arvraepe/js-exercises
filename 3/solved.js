/*

    Exercise 3: Creating an Optional data structure

    const person = {
      name: 'John',
      address: {
        city: 'New York',
        street: '1st street'
      }
    };

    const personWithoutAddress = {
      name: 'John',
    }

    const personWithoutStreet = {
      name: 'John',
      address: {
        city: 'New York'
      }
    }

    const street = Optional(person).map((person) => person.address).map((address) => address.street).getOrElse('Person has no street');
    const street2 = Optional(personWithoutAddress).map((person) => person.address).map((address) => address.street).getOrElse('Person has no street');
    const street3 = Optional(personWithoutStreet).map((person) => person.address).map((address) => address.street).getOrElse('Person has no street');

    Optional monad has the following methods:

    - isEmpty = is the value in the Optional filled in or not
    - map = transform the value in the Optional if it's filled in
    - getOrElse = returns the value of the optional OR the default if value is empty


 */