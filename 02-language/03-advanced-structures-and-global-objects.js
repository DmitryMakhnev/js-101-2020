/** RegExp **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

/**
 * @type {boolean}
 */
var isContainsCharOnly = /^\D+$/.test('qwe');
var isContainsCharOnly2 = new RegExp('^\\D+$').test('qwe');

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags
 * @type {boolean}
 */
var isContainsASymbol = /a/i.test('sdA');


/* Date */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/**
 * @type {Date}
 */
var date = new Date(1992, 9, 30, 12, 55, 60, 223);
/**
 * @type {number}
 */
var year = date.getFullYear();


/* Error */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

/**
 * @type {Error}
 */
var error = new Error('We have a problem');

/**
 * @type {string}
 */
var errorMessage = error.message;
/**
 * @type {string}
 */
var stackTrace = error.stack;


/** Boolean, Number, String, Array, Function **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
/**
 * @type {Boolean}
 */
var isOk = new Boolean('true');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
/**
 * @type {Number}
 */
var number = new Number('1');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
/**
 * @type {String}
 */
var string = new String(12);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/**
 * @type {Array}
 */
var array = new Array(12);

/**
 * @type {number}
 * 12
 */
var arraySize = array.length;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
/**
 * @type {Function}
 */
var fn = new Function('param', 'return param');
/**
 * @type {number}
 */
var fnResult = fn(1);

/** Map **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// ES 2015 https://kangax.github.io/compat-table/es6/#test-Map

var map = new Map();
var obj1AsKey = {};
var obj2asKey = {};

map.set(obj1AsKey, 1);
map.set(obj2asKey, 2);

/**
 * @type {number}
 * 1
 */
var mapValue1 = map.get(obj1AsKey);
/**
 * @type {number}
 * 2
 */
var mapValue2 = map.get(obj2asKey);


/** Set **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// ES 2015 https://kangax.github.io/compat-table/es6/#test-Set
var set = new Set([1, 2, 2, 2, 3]);
/**
 * @type {number[]}
 * [1, 2, 3]
 */
var values = Array.from(set);

