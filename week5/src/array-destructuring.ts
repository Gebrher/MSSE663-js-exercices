// #1 Variable swapping
export const fruits = ['apple', 'banana'];

export const [a,b]= fruits;
// Currently, I would get the following returns:
console.log(a); // 'apple'
console.log(b); // 'banana'

// deconstruct here
export const  [b1,a1] = fruits;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a1); // 'banana';
console.log(b1); // 'apple';
// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here

export const [a2,b2,...others] = food;
console.log(a2); // 'apple'
console.log(b2); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
['hello', 'taylor'];
export const [c,d]=['hello', 'taylor'];

export const stmt = c+','+' '+d+'!';

console.log(c+','+' '+d+'!');

// 'hello, taylor!'