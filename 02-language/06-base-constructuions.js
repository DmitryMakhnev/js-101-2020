
/** if...else **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

if (true) {
  console.log('hello');
}

if (false) {
  console.log('?');
} else {
  console.log('else branch');
}

if (false) {
  console.log('if branch');
} else if (true) {
  console.log('else in branch');
} else {
  console.log('else branch');
}

if (0) {
  console.log('if branch');
} else if (1) {
  console.log('else if branch');
}

// ?:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);


/** switch/case **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

var objForCase = [];

switch (objForCase) {
  case '1':
    console.log('1');
    break;
  case objForCase:
  case '3':
    console.log('2 or 3');
    break;
  default:
    console.log('default');
}


/** loops **/

// for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

var arrayForFor = ['a', 'b', 'c'];
for (var i = 0; i < arrayForFor.length; i++) {
  console.log(arrayForFor[i]);
}

var i2 = arrayForFor.length;
for (; i2-- ;) {
  console.log(arrayForFor[i2]);
}

var i2_2 = arrayForFor.length;
for (; i2_2-- ;) {
  if (i2_2 === 2) {
    continue;
  }
  if (i2_2 === 1) {
    break;
  }
  console.log(arrayForFor[i2_2]);
}

// for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
var obj = {
  a: 1,
  b: '2'
};

for (var p in obj) {
  if (obj.hasOwnProperty(p)) {
    console.log(p, obj[p]);
  }
}

// for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ES 2015 https://kangax.github.io/compat-table/es6/#test-for..of_loops

var map = new Map();
map.set('a', 1);
map.set('b', 2);

for (var entity of map) {
  console.log(entity[0]);
  console.log(entity[1]);
}

// while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
var i3 = 3;
while (i3--) {
  console.log(i3);
}


// do/while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
var result = '';
var iDW = 0;

do {
  iDW = iDW + 1;
  console.log(iDW);
} while (iDW < 5);

// Common array methods
// forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
['a', 'b', 'c'].forEach((item, index) => {
  console.log(item, index);
});


// map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var mapResult = ['a', 'b', 'c'].map((item, index) => `${item}_${index}`);
console.log(mapResult);


/** const let destructuring **/

// hosting
try {
(function () {
  console.log(asd);
}())
} catch(e) {
  console.log(e);
}

(function () {
  console.log(asd);
  var asd = 1;

  console.log(qwe);
  if (true) {
    var qwe = 2;
  }
  console.log(qwe);
}());

(function () {
  console.log(hello());

  function hello() {
    return 1;
  }
}());

(function () {
  {
    var a = 1;
  }
  console.log(a);
}());

// block statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
// ES 2015

try {
(function () {
  {
    let a = 1;
    console.log(a);
  }
  console.log(a);
}());
} catch (e) {
  console.log(e);
}

// let
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let
{
  let a = 1;
  console.log(a);
  a = 2;
  console.log(a);
}

// const
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const
try {
  (function () {
    const a = 1;
    console.log(a);
    a = 2;
    console.log(a);
  }());
} catch(e) {
  console.log(e);
}

{
  const a = {
    'asd': 1
  };
  console.log(a.asd);
  a.asd = 2;
  console.log(a.asd);
}

// Destructuring assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// ES 2015
var objForDestructuring = {
  obj: {
    a: 1
  },
  b: 2,
  obj2: {
    d: 3
  }
};

{
  const {
    obj: {
      a
    },
    b,
    obj2: {
      d: cProp
    },
    qwe
  } = objForDestructuring;
  console.log(a);
  console.log(b);
  console.log(cProp);
  console.log(qwe);

  try {
    const {
      qwe: {
        asd
      }
    } = objForDestructuring
  } catch (e) {
    console.log(e);
  }
}

const arrayForDestructuring = [1, {prop: 2}];
{
  const [firstValue, { prop }] = arrayForDestructuring;
  console.log(firstValue);
  console.log(prop);
}

// function parameters destruction
const fn = ({ prop1: { prop2 } }) => prop2;

console.log(fn({ prop1: { prop2: 22 } }));

// const and object
{
  const constObj = {
    prop: 1,
  };
  console.log(constObj.prop);
  constObj.prop = {};
  console.log(constObj.prop);
}

// Object.freeze()
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
const frozenObject = Object.freeze({
  prop: 1
});

console.log(frozenObject.prop);
try {
  frozenObject.prop = 2;
  console.log(frozenObject.prop);
} catch (e) {
  console.log(e);
}

// 👀 recommend to check Records & Tuples Proposal https://github.com/tc39/proposal-record-tuple

// Object initializer and New notations in ECMAScript 2015
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015
{
  const prop1 = 1;
  const prop2 = 'b';
  const objProp = {
    prop3: 'c',
    prop4: 'd',
  };

  const object = {
    prop1,
    prop2,
    objProp,
    asd: {
      ...objProp,
      'asd': 1,
    },
    ...objProp
  };
  console.log(object);
}

// try...catch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
try {
  const a = 1 + 1;
  console.log(a);
} catch (e) {
  console.log(e);
} finally {
  console.log('finally');
}

try {
  const a = 1 + z;
  console.log(a);
} catch (e) {
  console.log(e);
} finally {
  console.log('finally');
}

// throw
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
try {
  const a = 1 + 1;
  throw new Error(`It's custom error message`)
} catch (e) {
  console.log(e);
}

try {
  const a = 1 + 1;
  throw 'asd'; // 😢
} catch (e) {
  console.log(e);
}


/** Classes **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// ES 2015

class ClassA {
  constructor(prop) {
    this.prop = prop;
  }
}
const classAInstance = new ClassA(1);

console.log(classAInstance);
console.log(classAInstance.prop);
console.log(classAInstance instanceof ClassA);

class ExtendedClass extends ClassA {
  constructor(prop2) {
    super(1);
    this.prop2 = prop2;
  }
}

const extendedClassInstance = new ExtendedClass('b');

console.log(extendedClassInstance.prop);
console.log(extendedClassInstance.prop2);
console.log(extendedClassInstance);

console.log(extendedClassInstance instanceof ExtendedClass);
console.log(extendedClassInstance instanceof ClassA);

const Clazz = class {
  constructor(prop3) {
    this.prop3 = prop3;
  }
};

const claszzInstance = new Clazz(3);

console.log(claszzInstance.prop3);
console.log(claszzInstance);

console.log(claszzInstance instanceof Clazz);

// class methods

class ClassWithMethod {
  constructor(base) {
    this.base = base;
  }

  calc(a, b) {
    return this.base + a + b;
  }
}

class ExtendedClassWithMethod extends ClassWithMethod {
  constructor() {
    super(2);
  }

  calc(a, b) {
    return super.calc(
      a * this.base,
      b * (this.base + 2)
    );
  }
}

console.log(
  new ExtendedClassWithMethod().calc(1, 1)
);

// static
class ClassWithStaticMethod {
  static test() {
    return 1;
  }
}

console.log(
  ClassWithStaticMethod.test()
);

class ClassWithStaticMethod2 {
  static test() {
    return 1;
  }
  method() {
    return ClassWithStaticMethod2.test();
  }
}

console.log(new ClassWithStaticMethod2().method());

// class fields
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
// Stage 3 https://github.com/tc39/proposal-class-fields

class ClassWithClassField {
  field = 1;
}

const classWithClassFieldInstance = new ClassWithClassField();
console.log(classWithClassFieldInstance.field);

// interaction with class field
class ClassWithClassField2 {
  field = 1;

  constructor() {
    this.field += 1;
  }
}

const classWithClassFieldInstance2 = new ClassWithClassField2();
console.log(classWithClassFieldInstance2.field);

// static class field
class ClassWithStaticField {
  static field = 1;
}
console.log(ClassWithStaticField.field);

const classWithStaticFieldInstance = new ClassWithStaticField();
console.log(classWithStaticFieldInstance.field);

// private fields
class ClassWithPrivateOldStyle {
  _field = 1;
}
const classWithPrivateOldStyle = new ClassWithPrivateOldStyle();
console.log(classWithPrivateOldStyle._field); // 🤷‍
classWithPrivateOldStyle._field = 2 // 🤦‍
console.log(classWithPrivateOldStyle._field); // 🤷‍

// true private fields
class ClassWithPrivateFields {
  #field = 1;

  constructor() {
    console.log(this.#field);
  }

  method() {
    this.#field += 1;
    console.log(this.#field);
  }
}

const classWithPrivateFields = new ClassWithPrivateFields();
console.log(classWithPrivateFields.field);
// try {
//   // SyntaxError
//   console.log(classWithPrivateFields.#field);
// } catch (e) {}

classWithPrivateFields.method();

// static private
class ClassWithStaticPrivate {
  static #field = 1;

  constructor() {
    console.log(ClassWithStaticPrivate.#field);
  }
}

new ClassWithStaticPrivate();

// Syntax Error
// console.log(ClassWithStaticPrivate.#field);

// setters/getters

class ClassWithSettersAndGetter {
  #field = 1;

  set field(value) {
    // add your rules
    this.#field = value;
  }

  get field() {
    return this.#field;
  }

}

const classWithSettersAndGetter = new ClassWithSettersAndGetter();

console.log(classWithSettersAndGetter.field);
classWithSettersAndGetter.field = 2;
console.log(classWithSettersAndGetter.field);

// Dirty class extension

class SomeClass {
  #field = 1;

  constructor(data) {
    this.data = data;
  }

  nativeMethod() {
    return this.data + 3;
  }

  nativeMethod2 = () => {
    return this.data + 3;
  }

}

// because prototype based
SomeClass.prototype.dirtyMethod = function() {
  return this.data + 2;
};

const someClassInstance = new SomeClass(1);
console.log(someClassInstance.dirtyMethod(2)); // 💪

{
  const m = someClassInstance.nativeMethod;
  console.log(m.call({ data: 33 }));

  const m2 = someClassInstance.nativeMethod2;
  console.log(m2.call({ data: 33 }));
}


/** Generators **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators


/** Tagged templates **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
// ES 2015 https://kangax.github.io/compat-table/es6/#test-template_literals_tagged_template_literals

tag`Name is ${'test'}!`;

function tag(strings, name) {
  console.log(strings);
  console.log(name);
  console.log(arguments);
}


// We skipped
// async/await
// import/export
// because it'll be later

// Also see
// debugger - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
// label - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
// with - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with
