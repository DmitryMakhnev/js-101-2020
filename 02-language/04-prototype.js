/** Built-in methods **/
// Go to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/**
 * @type {string}
 * 'name_'
 */
var fixedString = 'name_112'.replace(/\d/ig, '');
var fixedString2 = new String('name_112').replace(/\d/ig, '');


/** Prototypes **/

var hasAsd = ({}).hasOwnProperty('asd')
console.log(({}).__proto__.__proto__);

var a = function() {

}

var obj1 = {
  a: a
};

var obj2 = {
  a: a
}

console.log(obj1.a === obj2.a);

// Object.create https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

var animal = {
  walk: function() {
    console.log('walk');
  }
};

var dog = Object.create(animal);
dog.name = 'Charly'
dog.say = function() {
  'use strict';
  console.log(this.name);
};

// var cat = Object.create(animal);

dog.walk();
dog.say();
// console.log(dog.hasOwnProperty('walk'));
// console.log(dog.hasOwnProperty('say'));
// cat.walk();

var superDog = Object.create(dog);
superDog.think = function() {
  console.log('think');
};
dog.name = 'Charly++';
console.log(superDog.name);
// superDog.walk();
superDog.say();
var say = superDog.say;
say();

//
function Animal() {}

Animal.prototype = {
  walk() {
    console.log('c: walk');
  }
};

function Dog() {}

var animalInstance = new Animal();
animalInstance.say = function () {
  console.log('c: gaf');
};
Dog.prototype = animalInstance;

var dogInstance = new Dog();
dogInstance.say();
dogInstance.walk();



