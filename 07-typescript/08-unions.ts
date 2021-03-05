// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types
const getFirstChar = (data: string|(string[])): string|undefined => {
  if (typeof data === 'string') {
    return data.charAt(0);
  }
  return data[0]?.charAt(0);
}

console.log(getFirstChar('asd'));
console.log(getFirstChar(['qw', 'e']));
console.log(getFirstChar([]));


const getLength = (data: string|(string[])): number => data.length;

console.log(getLength('asd'));
console.log(getLength(['1', '2']));
