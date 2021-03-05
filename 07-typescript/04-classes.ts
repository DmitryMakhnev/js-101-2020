
// Public, private, and protected modifiers
// https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers

// Public and aliases

class Animal {
  constructor(
    public name: string,
    public age: number
  ) {}
}

const cat = new Animal(
  'Tom',
  81
);
console.log(cat.name);
console.log(cat.age);


// Private

class MovingAnimal extends Animal {
  constructor(
    name: string,
    age: number,
    private speedMetersInSeconds: number
  ) {
    super(name, age);
  }

  move(seconds: number) {
    return seconds * this.speedMetersInSeconds;
  }
}

const dog = new MovingAnimal(
  'Guffy',
  89,
  4
);
console.log(dog.move(20));


// Protected

class Alive {
  constructor(protected age: number) {}
}

class Human extends Alive {
  constructor(age: number) {
    super(age);
  }

  grow() {
    return ++this.age;
  }
}

const human = new Human(0);
console.log(human);
console.log(human.grow());


// Abstract class
// https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes

abstract class SomethingAlive {
  protected constructor(protected age: number) {}

  abstract sayAge(): number;
}

class Plant extends SomethingAlive {
  constructor(age: number) {
    super(age);
  }

  sayAge(): number {
    return this.age;
  }
}

const plant = new Plant(10);
console.log(plant.sayAge());


// Don't forget about structural typing
const someAnimal: Animal = {
  age: 12,
  name: 'Floppy'
};

console.log(someAnimal.age);
console.log(someAnimal instanceof Animal);
