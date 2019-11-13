/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

//********  PART ONE *******//

let monkey = {
    name: 'Chilada',
    origin: 'Ethiopia',
    color: 'White',
    getName: function(){
        return this.name;
    },
    getOrigin: function(){
        return this.origin;
    }
}

// calling methods 

console.log("My name is "+monkey.getName());
console.log("I'm orginally from "+monkey.getOrigin());

//********  PART TWO *******//

class Monkey {
   constructor(name,origin,color){
       this.name = name;
       this.origin = origin;
       this.color= color;
   }
   getName(){
       return this.name;
   }
   getOrigin(){
       return this.origin;
   }
}

let myMonkey = new Monkey('Chilada','Ethiopia','White');

// calling methods 

console.log("My name is "+myMonkey.getName());
console.log("I'm orginally from "+myMonkey.getOrigin());
