/*

    Exercise 5: Recursion with ...rest argument and array destruction

 */

const recursiveSum = ([n, ...rest]) => rest.length === 0 ? n : n + recursiveSum(rest);

console.log(`Recurse sum [1,2,3] = ${recursiveSum([1,2,3])}`);