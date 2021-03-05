// https://www.typescriptlang.org/docs/handbook/generics.html#hello-world-of-generics
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(1));
console.log(identity('asd'));
console.log(identity({ test: 'asd' }));


// https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity({ length: 1, size: 2 }));


// https://www.typescriptlang.org/docs/handbook/generics.html#using-type-parameters-in-generic-constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
getProperty(x, 'm');

// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/utility-types.html
