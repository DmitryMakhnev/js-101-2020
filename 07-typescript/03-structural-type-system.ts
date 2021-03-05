// Structural type system
// https://en.wikipedia.org/wiki/Structural_type_system

type Dog = {
  name: string;
  age: number;
};

type Cat = {
  name: string;
  age: number;
};

let Goofy: Dog = {
  name: 'Guffy',
  age: 89
};

let Tom: Cat = {
  name: 'Tom',
  age: 81
};


Goofy = Tom;
console.log(Goofy.age);

