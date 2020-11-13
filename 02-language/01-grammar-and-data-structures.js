// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

// inline comment

/*
 multi line comment
*/


/*
 `var` is keyword for variable declaration https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 `name` is variable name Identifier https://developer.mozilla.org/en-US/docs/Glossary/Identifier
 `=` is assignment operator  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators
 `true` is boolean value https://developer.mozilla.org/en-US/docs/Glossary/Boolean
 `;`  semicolon character is used to separate statements in JavaScript code.
*/
var isJavaScript = true;

// read value
isJavaScript;

// rewrite value
isJavaScript = false;

// rewrite value with different type
// it's ok because we have week type system (https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_%22strong%22_or_%22weak%22)
isJavaScript = 1;

/** Booleans **/

/**
 * JSDoc https://jsdoc.app/
 * @type {boolean} - https://developer.mozilla.org/en-US/docs/Glossary/Boolean
 */
var isNotJava = false;

/** Numbers **/

/**
 * @type {number} - The Number type is a double-precision 64-bit binary format IEEE 754 value
 *    (numbers between -(2^53 − 1) and 2^53 − 1)
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
 */
var age = 29;

var negativeNumber = -129;

// float
var PI = 3.14;
var half = .5;

// Hexadecimal
var color = 0xFFFFFF;

// e
var oneHundred = 123e2; // 1 * 10 ** 2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
var size = Infinity;

// "Not a Number"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
var strangeNumber = NaN;


/** BigInts **/
/**
 * ES 2020
 * @type {bigint} - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */
var someBigInt = 100500n;


/** Decimal (stage 1) **/
// https://github.com/tc39/proposal-decimal


/** String **/

/**
 * @type {string} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
var name = 'TPolis';
var courseName = "Frontend";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation
var stringWithSymbols = 'I can\'t\ndo it.';

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * ES 2015 https://kangax.github.io/compat-table/es6/#test-template_literals
 */
var lectureName = `JavaScript language introduction`;

var templateLiteralsMultilineString = `Hello!
my dear
friend`;

var lectureNumber = 11;
var stringWithTemplateLiterals = `Lecture number is ${lectureNumber}`;


/** Undefined **/

/**
 * @type {undefined} - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
 */
var some;

var somethingElse = undefined;
