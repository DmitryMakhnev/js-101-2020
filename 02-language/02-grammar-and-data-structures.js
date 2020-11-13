/** Object **/

/**
 * @type {object} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects
 */
var event = {
  program: 'Technopolis',
  course: 'Fronted',
  lecture: {
    name: 'JavaScript language introduction',
    number: 11
  },
  isEnded: false,
  timeline: {
    '18:00': {
      name: 'Start',
    },
    '≈21:00': {
      name: 'End'
    },
  }
};

/**
 * Read property
 * @type {string}
 */
var eventProgram = event.program;

/**
 * Read properties deep
 * @type {number}
 */
var lectureNumber = event.lecture.number;

/**
 * Read not defined property
 * @type {undefined}
 */
var lectureDeadline = event.lecture.lectureDeadline;

try {
  // Read not defined properties deep
  var participantsCount = event.participants.all;
} catch (e) {
  // TypeError: Cannot read property 'all' of undefined
}

// read object prop with by string name
/**
 * @type {string}
 */
var lastTimelineEventName = event.timeline['≈21:00'].name;

// read object prop with by variable name
var lastTimelineEventTime = '≈21:00';
/**
 * @type {string}
 */
var lastTimelineEventName2 = event.timeline[lastTimelineEventTime].name;

// rewrite property
event.course = 'Fronted 101';

// new write property
event.isAboutProgramming = true;

/**
 * read new property
 * @type {boolean}
 */
var isAboutProgramming = event.isAboutProgramming;

// write property deep
event.lecture.name = `${event.lecture} part 1`;

// write not defined property deep
try {
  event.rating.pure = 10;
} catch (e) {
  // TypeError: Cannot read property 'pure' of undefined
}

// numbers as pros
var objWithNumberProps = {
  '1': 'Hello'
};
/**
 * @type {string}
 */
var objWithNumberPropsValue = objWithNumberProps[1];

// ES 2015 syntax
var objWithNumberProps2 = {
  [1]: 'Hello again'
};
/**
 * @type {string}
 */
var objWithNumberProps2Value = objWithNumberProps2['1'];


/**
 * In JavaScript almost everything is an object, except `undefined` and something else...
 */


/** Array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array **/
var rates = [10, 20, 30];

/**
 * @type {number}
 */
var firstRate = rates[0];

/**
 * @type {number}
 */
var ratesCount = rates.length;

/**
 * @type {number}
 */
var lastRate = rates[rates.length - 1];


var mixed = [10, '2', {}, undefined, ['1']];
/**
 * @type {string}
 */
var someValueFromMixed = mixed[4][0];

// array with objects
var prices = [
  {
    licenceType: 'commercial',
    cost: 100
  },
  {
    licenceType: 'personal',
    cost: 50
  },
];

var personalPriceIndex = 1;
  /**
 * @type {number}
 */
var personalPriceCost = prices[personalPriceIndex].cost;

// write value
var arrayForWrite = [0];

arrayForWrite[1] = 'test';
// 2
var arrayForWriteSize = arrayForWrite.length;

/**
 * @type {number}
 */
var writtenValue = arrayForWrite[1];

// write with gap
arrayForWrite[100] = 'some';
/**
 * @type {string}
 */
var _100thArrayValue = arrayForWrite[100];

// 101
var arraySize = arrayForWrite.length;

/**
 * @type {undefined}
 */
var _99thArrayValue = arrayForWrite[99];


/** Function **/

/**
 * @type {function} https://developer.mozilla.org/en-US/docs/Glossary/Function
 */
function getNumber() {
  return 1;
}

/**
 * @type {number}
 */
var resultOfGetNumberCall = getNumber();

/**
 * @description Function with parameters
 * @param {object} event
 * @param {string} propName
 * @return {*}
 */
function getEventProp(event, propName) {
  return event[propName];
}

/**
 * @type {undefined}
 */
var courseProgram = getEventProp(event, 'asd');


/** Method (Function as objet prop value) **/
var course = {
  getRepeatingNumber: function () {
    return 10;
  }
};

/**
 * @type {number}
 */
var repeatingNumber = course.getRepeatingNumber();

/**
 * Method with object interaction
 */
var homeWork = {
  difficulty: 5,
  getDifficultyInfo: function() {
    return `${this.difficulty} of 10`;
  }
};

/**
 * @type {string}
 */
var homeWorkDifficultyInfo = homeWork.getDifficultyInfo();

/**
 * getter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
 */
var javaScriptEngine = {
  version: 8.7,
  ECMAScriptSupport: {
    '2020': 80,
    '2019': 100
  },
  get fullInfo() {
    return `Engine version ${this.version}, supports: ES 2020 ${this.ECMAScriptSupport['2020']}%`;
  }
};

/**
 * @type {string}
 */
var engineInfo = javaScriptEngine.fullInfo;

/**
 * setter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
 */
var homeWorkProgress = {
  tasksProgress: {
    html: 0,
    css: 0,
  },
  set htmlProgress(completeTasks) {
    this.tasksProgress.html = completeTasks;
  },
};

homeWorkProgress.htmlProgress = 10;

/**
 * @type {number}
 */
var htmlProgress = homeWorkProgress.tasksProgress.html;

// Immediately Invoked Function Expression https://developer.mozilla.org/en-US/docs/Glossary/IIFE
var iifeResult;
(function () {
  iifeResult = 10;
}());

// anonymous function
var fn = function () {
  return 1;
}

/**
 * @type {number}
 */
var fnResult = fn();

// Arguments array-like object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#The_arguments_object
function showArguments() {
  return arguments;
}

var args = showArguments(1, 'test');
// 2
var argsCount = args.length;
// 1
var firstArgument = args[0];
// 'test'
var secondArgument = args[1];

// Arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// ES 2015 https://kangax.github.io/compat-table/es6/#test-arrow_functions
// In our current context no this, no arguments
var arrowFn = param => `${param} from arrow function`;

var arrowFn2 = (param1, param2) => {
  return `${param1} ${param2}`;
}

/**
 * @type {string}
 */
var result = arrowFn('hello', 'arrow function');

/* https://en.wikipedia.org/wiki/Higher-order_function */

function caller(fn, param) {
  return fn(param);
}

/**
 * @type {string}
 */
var callerResult = caller(
  name => `Hello, ${name}!`,
  'Eva'
);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
function contextCaller(fn, ctx, param) {
  return fn.call(ctx, param);
}

/**
 * @type {string}
 */
var contextCallerResult = contextCaller(
  function(lectureNumber) {
    return `Hello ${this.name}! It's lecture about JS № ${lectureNumber}.`;
  },
  {
    name: 'WALL-E'
  },
  2
);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
var contextCallerWithParams = (fn, ctx, params) => fn.apply(ctx, params);

var contextCallerWithParamsResult = contextCallerWithParams(
  function () {
    return {
      ctx: this,
      params: arguments,
    };
  },
  {
    type: 'robot'
  },
  ['explorer', 'eco']
);

/**
 * @type {string}
 */
var robotType = contextCallerWithParamsResult.ctx.type;
/**
 * @type {string}
 */
var robot2ndParam = contextCallerWithParamsResult.params[1];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
var functionWithBoundContext = function(propName) {
  return this[propName];
}.bind({
  name: 'Woody',
});

/**
 * @type {string}
 */
var characterName = functionWithBoundContext('name');

// function produces function
function createPropertyReadrOf(object) {
  return propName => object[propName];
}

var createPropertyReadrOf2 = object => propName => object[propName];

/**
 * @type {function(string): *}
 */
var buzzLightyearPropsReader = createPropertyReadrOf({ name: 'Buzz Lightyear' });
var buzzLightyearPropsReader2 = createPropertyReadrOf2({ name: 'Buzz Lightyear' });
/**
 * @type {string}
 */
var name = buzzLightyearPropsReader('name');
var name2 = buzzLightyearPropsReader2('name');

/**
 * new https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */
function CharacterConstructor(name) {
  this.name = name;
}

var jamesSullivanCharacter = new CharacterConstructor('James Sullivan');
/**
 * @type {string}
 */
var name2 = jamesSullivanCharacter.name;

// function length
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
var fnWith2Params = (param1, param2) => {};
/**
 * @type {number}
 */
var functionLength = fnWith2Params.length;


/** Symbol **/
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
  ES 2015 https://kangax.github.io/compat-table/es6/#test-Symbol
*/

var symbol = Symbol('just symbol for education');

var obj = {
  [symbol]: 'test'
};

/**
 * @type {string}
 */
var valueBySymbol = obj[symbol];

var symbol2 = Symbol('just symbol for education');

/**
 * @type {undefined}
 */
var valueBySymbol2 = obj[symbol2];


/** null **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

var nothing = null;

var sObj = {
  prop: null,
};
