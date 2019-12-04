//import { DefaultSerializer } from "v8";

// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// Start #1 Refactoring
 
export const refactoredNumbers = [...numbers];

console.log(refactoredNumbers);


// End #1 Rfactoring 


// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];

//export const originalContenders = runnerUps.unshift(winners[0]);
//console.log(originalContenders);

// Start #2 Refactoring

// I have to comment the above two lines otherwise my new refactored method would 
// run on top of the above line of code change wich brings output of array size 6.
// Noe, expected array size from the my refactoring shoud be same size out put at the aboave original , which is 5. 
export const refactoredOrginalContenders = [...runnerUps,...winners].length;


console.log(refactoredOrginalContenders);


// End #2 Refactoring

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);

// Start #3 Refactoring
console.log(originalPersons);

export const refactoredOrigianlPersons = {...bob,...kyle};

console.log(refactoredOrigianlPersons);


// End #3 Refactoring

// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

 export const originalUpdates = data.map(task => {
   if (task.id === update.id) {
   return Object.assign(task, update);
  }   return task;
});

// Start #4 Refactoring

// Before refactor output 
console.log(originalUpdates);

 export const refactoredOriginalUpdates2 = data.map(task => {
   if (task.id === update.id) {
   return {...task,...update};
 }   return task;
});

console.log(refactoredOriginalUpdates2);


// End #4 Refactoring
