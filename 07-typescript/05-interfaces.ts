// Interfaces
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface Growable {
  grow(): number;
}

interface Readable {
  read(): string;
}

class Person implements Growable, Readable {
  grow() {
    return 22;
  }

  read(): string {
    return 'read!';
  }
}

const person = new Person();
console.log(person.grow());
console.log(person.read());
