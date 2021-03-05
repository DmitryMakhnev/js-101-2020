// https://www.typescriptlang.org/docs/handbook/basic-types.html

// https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
const bool: boolean = true;

// https://www.typescriptlang.org/docs/handbook/basic-types.html#number
const num: number = 10;
const num2 = 12;

// https://www.typescriptlang.org/docs/handbook/basic-types.html#string
const str: string = 'asd';

// https://www.typescriptlang.org/docs/handbook/basic-types.html#array
const arr: number[] = [1, 2, 3];
const strArray: string[] = ['a', 'b', 'c'];

// https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
let someTuple: [string, number] = ['asd', 1];

// someTuple = [1, 'asd'];

// https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
// https://www.typescriptlang.org/play?#code/KYOwrgtgBAwg9gGzgJygbwFBSgJWAEwBosoBxZYUY7AIQTGGIF8MBjOEAZwBcpWxkFEN3hJkALliIUUALxSxAOnKUQAbiA
enum Color {
  Red,
  Green,
  Blue,
}
const currentColor: Color = Color.Green;


// https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
let notSure: unknown = 4;

if (typeof notSure === 'number') {
  console.log(notSure + 1);
}

notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;


// https://www.typescriptlang.org/docs/handbook/basic-types.html#any

let somethingAny: any = 'asd'
console.log(somethingAny * 12);


// https://www.typescriptlang.org/docs/handbook/basic-types.html#never
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined
let u: undefined = undefined;
let n: null = null;
// By default null and undefined are subtypes of all other types
// However, when using the --strictNullChecks flag, null and undefined are only assignable to unknown, any


// Cast type
// https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;


// also see https://www.typescriptlang.org/docs/handbook/literal-types.html
