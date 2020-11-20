// https://en.wikipedia.org/wiki/Polyfill_(programming)

const array = [0, 1, 2, 3];
console.log(array[array.length - 1]);

Object.defineProperty(Array.prototype, 'last', {
  enumerable: false,
  set(item) {
    this[this.length - 1] = item;
  },
  get() {
    return this[this.length - 1];
  }
});

console.log(array.last);
console.log(array.last = 'last!!');
console.log(array.last);

// see https://github.com/zloirock/core-js
// see https://babeljs.io/repl#?browsers=defaults&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEAqCmEAu0DeAoa1gHsB2yATgK7BI6EAUADoTtQJRqZbRIAWAlhAHS33QAvNH7UA3CwC-6aelCQYAQWjwAHknh4AJjATJmWXASQkyFSkwytoEYtXhUA5AEZHDKTPRz8-sEOh48ADu0IoWYkA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.3&externalPlugins=
