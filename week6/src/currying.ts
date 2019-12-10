// #1 Convert this javascript function to a curried function
function curryMe(string1:any, string2:any, string3:any): string {
  return string1 + ' ' + string2 + ' ' + string3;
}


// source code here
export const test1 = curryMe('string1','string2','string3');
console.log(test1)

function curriedMe(string1:string){
  return (string2:string)=>{
    return (string3:string)=>{
      return string1 + ' ' + string2 + ' ' + string3;
    }
  }
}

export const test2 = curriedMe('string1')('string2')('string3');


console.log(test1);

// #2 Hoist and convert nested functions to curried functions
function doMath(a:any) {
  return function add(b:any) {
    return function subtract(c:any) {
      return a + b - c;
    };
  };
}

export const nestedResult = doMath(4)(5)(1);

console.log(nestedResult);
// source code here

export const hositedCurriedDoMath = (a:any)=>(b:any)=>(c:any)=>a+b-c;

export const curriedResult = hositedCurriedDoMath(4)(5)(1);

console.log(curriedResult);


// #3 Write a curried function that returns an array containing the ninjas who have a black belt
const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here

 export const hoistedNj= (arr:any)=>{
    return arr.filter((r:any)=>r.belt=='black');
 }

 export const blackBelts = hoistedNj(ninjasOne)

 console.log(blackBelts);
/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here

 export const hoistedNj2= (arr:any)=>{
   return (s:any)=>arr.map((r:any)=>{
    
     var obj= r;
        obj.status= s[r.belt];
      
     return obj;})
 }
  

 export const withStatus1 = hoistedNj2(ninjasOne)(statusTypes);

 export const withStatus2 = hoistedNj2(ninjasOne)(gamerStatusTypes);

 console.log(withStatus1);

 console.log(withStatus2);

 export const withStatus3 = hoistedNj2([{ name: 'Michelangelo', belt: 'white' }])(gamerStatusTypes);

 
 console.log(withStatus3);
