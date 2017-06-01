

/*

  the var-statement is function scoped

 */
console.log('=== VAR STATEMENT');

var x = 1;

if (1 === 1) {
  var x = 1;
}

function func () {
  var x = 1;
}

for (var i = 0; i < 5; i++) {
  console.log('loop: ', i);
}

console.log('outside loop: ', i);

/*

  the let-statement is

 */
console.log('=== LET STATEMENT');

if (1 === 1) {
  let y = 1;
}

for (let j = 0; i < 5; i++) {
  console.log('loop: ', j);
}

console.log('outside loop: ', typeof j);

/*

  the const-statement

 */
console.log('=== CONST STATEMENT');
const num = 1;
// num = 2 is not possible

const arr = [];
arr.push(1);

const obj = {};
obj.x = 1;

arr.forEach(console.log);
console.log('obj.x:', obj.x);

/**
 *
 * Conclusion?
 *
 * Use const as default. It should be the first thing to try. Is a CONST not working? Switch over to let.
 * There should be no reason (except for backwards compatibility) to use var anymore.
 *
 * Compatibility:
 * IE 11+
 *
 * Only know that CONST & LET are broken in IE11 and Edge 13- when used in FOR-IN // FOR-OF loops
 *
 * Therefore it's using them in a browser context a bit hard... I always suggest teaching with the latest technologies.
 * They will learn browser compatibility when they need to. Teach the right thing, let them use CONST and LET.
 * Point out the compatibility issues.
 *
 */