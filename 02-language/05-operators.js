/** typeof **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// primitive

console.log(typeof undefined);

console.log(typeof true);

console.log(typeof 10);

console.log(typeof 'string');

console.log(typeof 100500n);

// not primitive
console.log(typeof Symbol('hello'));

console.log(typeof {});

console.log(typeof null);

console.log(typeof []);
console.log(Object.prototype.toString.call([]));
console.log(Array.prototype.toString.call([1, 'test']));
console.log(Array.isArray([]));

console.log(typeof function () {});

console.log(typeof new Date());
console.log(Object.prototype.toString.call(new Date()));


/** Equality == === **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Equality_operators

console.log(true == true);
console.log(true != false);

console.log(1 == 1);
console.log(1 != 2);

console.log('asd' == 'asd');
console.log('asd' != 'qwe');

console.log(100500n == 100500n);
console.log(100500n != 500n);

// by reference

console.log(Symbol('hello') == Symbol('hello'));
var symbol = Symbol('hello');
console.log(symbol == symbol);

console.log({} == {});
var obj = {};
console.log(obj == obj);

console.log([] == []);
var array = [];
console.log(array == array);

console.log((() => {}) == (() => {}));
var fn = () => {};
console.log(fn == fn);

// Dangerous zone of ==
// Because http://es5.javascript.ru/x11.html#x11.9.3

console.log(1 == '1');

console.log(0 == false);

console.log('' == 0);

console.log([0] == false);

console.log([[[1]]] == '1');

console.log(undefined == null);

console.log(1 == 1n);

// ===
console.log(1 === '1');

console.log(0 === false);

console.log('' === 0);

console.log([0] === false);

console.log([[[1]]] === '1');

console.log(undefined === null);

console.log(1 === 1n);


// logical Not
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
console.log(!false);
console.log(!true);

console.log(!!true);

console.log(!'');
console.log(!0);
console.log(!-1);

console.log(!['']);

// >,<,>=
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators

console.log('1' < '2');
console.log(2 > '3');
console.log(2n >= '2');

console.log('asd' < 'qwe');

console.log(2n >= [['2']]);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators

// +
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
console.log(2 + 1);
console.log(2n + 5n);

try {
  console.log(2n + 1);
} catch (e) {
  console.log(e);
}

console.log(true + false);
console.log(true + true + true);

console.log('asd' + 'asd');
console.log('asd' + 2);
console.log(2 + 'asd');

console.log(2 + [3]);
console.log(2 + [3, 4]);

console.log(2 + {});
console.log({} + []);
console.log({} + (() => {}));

console.log(0.1 + 0.2);
// https://0.30000000000000004.com/


// -
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation

console.log(2 - 1);
console.log(2n - 1n);

try {
  console.log(2n - 1);
} catch (e) {
  console.log(e);
}

console.log('asd' - 1);
console.log(1 - [2]);
console.log({} - [2]);

// ++ / --
var inc = 1;
console.log(inc++);
console.log(inc);

console.log(inc--);
console.log(inc);

console.log(++inc);
console.log(--inc);

var incString = 'asd';
console.log(++incString);
console.log(--incString);

// *
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
console.log(2 * 4);

console.log('asd' * 2);

// /
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
console.log(2 / 4);

console.log('asd' / 4);

console.log(1 / -0);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Bitwise_shift_operators

var a = 5;           // 00000000000000000000000000000101
var b = 2;           // 00000000000000000000000000000010
console.log(a << b); // 00000000000000000000000000010100

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Binary_bitwise_operators

var a1 = 5;           // 00000000000000000000000000000101
var b1 = 3;           // 00000000000000000000000000000011

console.log(a1 ^ b1); // 00000000000000000000000000000110

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Binary_logical_operators
console.log(true && true);
console.log(false && true);

console.log(true && 'asd');

console.log(0 && 'asd');
console.log(1 && 'asd' && -1);

var asd = 1;
console.log(asd && (() => { console.log(1); })());

asd = 0
console.log(asd && (() => { console.log(1); })());


console.log(1 || 'asd');
console.log(false || 'asd');
console.log(0 || 'asd');
console.log('' || 'asd');
console.log(null || 'asd');
console.log(undefined || 'asd');

var param1 = 0;
var resolvedParam = param1 || -1;
console.log(resolvedParam);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// ES 2020
console.log(1 ?? 'asd');
console.log(false ?? 'asd');
console.log(0 ?? 'asd');
console.log('' ?? 'asd');
console.log(null ?? 'asd');
console.log(undefined ?? 'asd');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// ES 2020
var obj = {};

try {
  obj.some.deep.prop;
} catch (e) {
  console.log(e);
}

console.log(obj?.some?.['deep']?.prop);

console.log(obj?.some?.['deep']?.prop ?? 'test');



// in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
var symbolAsKey = Symbol();
var obj = {
  a: '1',
  [symbolAsKey]: 2
};
console.log('a' in obj);
console.log(symbolAsKey in obj);
console.log('toString' in obj);

console.log('z' in obj);

// instanceof
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
var date = new Date();
console.log(date instanceof Date);

console.log(new String('asd') instanceof String);
console.log('asd' instanceof String);

function MyCustomConstructor() {}
var instance = new MyCustomConstructor();
console.log(instance instanceof MyCustomConstructor);

// delete
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
var obj3 = {
  'a': 1,
  'b': 2
};
console.log(obj3);
delete obj3.a;
console.log(obj3);

delete obj3.z;
console.log(obj3);

// ...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// ES 2018 https://kangax.github.io/compat-table/es2016plus/#test-object_rest/spread_properties

// for object
var objA = { prop1: 'asd', prop2: 'prop2 from `objA`' };
var objB = { prop2: 'prop2 from `objB`', prop3: 'qwe' };

console.log({...objA, ...objB, prop4: 'prop4'});
console.log({...objB, ...objA, prop4: 'prop4'});

// for arrays
var arrayA = [0, 1, 2, 3];
var arrayB = [0, 1, 2, 3];

console.log([...arrayA, '|', ...arrayB]);

// for functions
const sum = (a, ...fnArgs) => fnArgs.reduce((a, b) => a + b, 0);

var args = [1, 2, 3, 4 ,5];
console.log(sum(10, ...args, 20));


// See https://joshwcomeau.com/operator-lookup/
