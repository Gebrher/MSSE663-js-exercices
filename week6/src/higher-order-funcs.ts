
/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */


 export const things1 =[{id:1,name:'thing1',job:'engineer'},
 {id:2,name:'thing2',job:'technicin'},
 {id:3,name:'thing3',job:'teacher'},
 {id:4,name:'thing4',job:'driver'},];

 var hoistedFun = function(t:any){
    var rObj = {id:0,name:''};
    if(t.id<=2){
    rObj.id = t.id;
    rObj.name= t.name;
    return rObj;

 }
}
 export const mappedThings1 = things1.filter(t=>t.id<=2).map(hoistedFun);

 console.log(mappedThings1);

 





 //
 export const things = ['thing1', 'thing2'];

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */

 function myFun (key:string){

    return key;
 }

export const hoist2 = (arr:any)=>{

    return arr.map((r:any)=>{return myFun(r.name);})
}

 

  export const curriedFunction = ()=>{
      return hoist2(mappedThings1);
  }

export const curriedResult =curriedFunction();
console.log(curriedResult);