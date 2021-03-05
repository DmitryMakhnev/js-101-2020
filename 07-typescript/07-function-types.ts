// https://www.typescriptlang.org/docs/handbook/functions.html#function-types

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(1, 2));


type AddFn = (a: number, b: number) => number;

const a: AddFn = (a, b) => a + b;

console.log(a(1, 2));


function addMany(x: number, y: number = 2, z?: number): number {
  return x + y + (z != null ? z : 0);
}

console.log(addMany(1));
