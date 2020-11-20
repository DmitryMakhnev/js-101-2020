// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

/** Math **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.E);
// ... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#Static_properties

console.log(Math.abs(-3));
console.log(Math.floor(2.3));
console.log(Math.round(2.3));
console.log(Math.round(2.6));
console.log(Math.ceil(2.1));

console.log(Math.sin(2.1));
console.log(Math.cos(2.1));
//... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#Static_methods


/** eval **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
console.log(eval('1 + 2'));


/** isNaN **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNan
console.log(NaN == NaN);

console.log(isNaN(NaN));
console.log(isNaN(1));


/** parseFloat **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
console.log(parseFloat('123.3'));
console.log(parseFloat('12z3.3'));
console.log(parseFloat('zx12z3.3'));
console.log(parseFloat(1n));

/** parseInt **/
console.log(parseInt('10.1', 10));
console.log(parseInt('08z', 10));

console.log(parseInt('101', 2));
console.log(parseInt('101', 8));
console.log(parseInt('101z', 16));

console.log(parseInt('zz101', 16));


/** encodeURIComponent **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

console.log(encodeURIComponent(' Hello=?'));


/** decodeURIComponent **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

console.log(decodeURIComponent('%20Hello%3D%3F'));


/** JSON **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

console.log(
  JSON.stringify({name: 'test', age: 100, languages: ['html', 'css']})
);

console.log(
  JSON.stringify({name: 'test', age: 100, languages: ['html', 'css']}, null, 2)
);

console.log(
  JSON.parse(`{
    "name": "test",
    "age": 100,
    "languages": [
      "html",
      "css"
    ]
  }`)
);


/** Intl **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
const relativeTimeFormat = new Intl.RelativeTimeFormat('ru');
console.log(relativeTimeFormat.format(-1, 'day'));
console.log(relativeTimeFormat.format(-1, 'hour'));


/** ArrayBuffer + TypedArray **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
console.log(view);

// See also
// SharedArrayBuffer - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
// DataView – https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
// Atomics - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics


/** Array **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Static_methods
console.log(
  Array.from('123')
);
console.log(
  Array.from(new Set([1, 2, 2, 3]))
);

console.log(
  Array.isArray('')
);

console.log(
  Array.isArray([])
);

console.log(
  Array.isArray({[0]: 1, length: 1})
);

console.log(
  Array.of(1, 2, 3)
);

/** Object **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Static_methods

console.log(
  Object.assign(
    {a: 1},
    {b: 2, c: 4},
    {c: 3}
  )
);

{
  const obj = { prop: 1 };
  const obj2 = Object.create(obj)
  console.log(
    Object.getPrototypeOf(obj2) === obj
  );
}

{
  const obj = {prop1: 1, prop2: 2};
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
}

console.log(
  Object.fromEntries([['key1', 1], ['key2', 2]])
);

{
  const obj = Object.freeze({prop: 1});
  obj.prop = 2;
  console.log(obj.prop);
  console.log(Object.isFrozen(obj));
}

{
  const obj = {prop1: 2};
  Object.preventExtensions(obj);
  obj.prop1 = 10
  obj.prop2 = 2;
  console.log(obj);

  console.log(Object.isExtensible(obj));
  console.log(Object.isExtensible({}));
}

{
  const obj = Object.seal({
    prop1: 1
  });
  delete obj.prop1;
  console.log(obj.prop1);

  console.log(Object.isSealed(obj));
}

{
  const obj1 = {prop1: 1};
  const obj2 = {prop2: 2};
  console.log(obj2.prop2);
  console.log(obj2.prop1);

  Object.setPrototypeOf(obj2, obj1);

  console.log(obj2.prop1);
  console.log(
    Object.getPrototypeOf(obj2) === obj1
  );
}

// Object.defineProperty
{
  const obj = {};
  Object.defineProperty(
    obj,
    'prop',
    {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: false,
    }
  );
  console.log(obj.prop);

  obj.prop = 2;
  console.log(obj.prop);

  console.log(Object.keys(obj));

  delete obj.prop;
  console.log(obj.prop);

  const obj2 = {};
  Object.defineProperty(obj2, 'prop', {
    set(v) {
      this.value = v + 1;
    },
    get() {
      return this.value;
    }
  });
  console.log(obj2.prop);

  obj2.prop = 1;
  console.log(obj2.prop);
}


/** Proxy **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// ES 2015
{
  const obj = {};
  const proxiedObj = new Proxy(obj, {
    get(obj, prop) {
      if (prop === 'name') {
        return 'Proxy';
      }
    },
    set(obj, prop, value) {
      obj[`proxied_${prop}`] = value;
    },
  });

  console.log(proxiedObj.name);

  proxiedObj.test = '1';
  console.log(proxiedObj);
}

// See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
