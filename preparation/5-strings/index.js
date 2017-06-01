const multi = `
This is a multi line string.
  Extremely usefull to do HTML.

  <div>
    Editors even recognize HTML in this string interpolation
  </div>

  Awesome.
`;

//
const person = { name: 'John' };
const mail = `
  Hi ${person.name},

  Happy to meet you!

  Kind Regards,
  Your employer
`;

console.log(mail);

