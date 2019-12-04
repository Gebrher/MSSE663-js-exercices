// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

// deconstruct here

var {name:person,title:job}= object;

console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

// deconstruct here

var {user:user, address:address,id} = nestedObject;

console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #4 Create a new object given the destrutured values above

// reconstruct here

// #3 Object with key value pairs: construct a statement
export const {greeting:c,name:d}= { greeting: 'hello', name: 'taylor' } ;

console.log(c+','+' '+d+'!');

// 'hello, taylor!'
