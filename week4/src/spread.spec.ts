import { numbers,refactoredNumbers,refactoredOrginalContenders,originalPersons,
refactoredOrigianlPersons,refactoredOriginalUpdates2 } from './spread';
import { expect } from 'chai';
import 'mocha';


describe('Testing spread.ts',()=>{
    
    it('numbsers should equal refactoredNumbers',()=>{
       expect (numbers).to.be.eql(refactoredNumbers);

});

it('Lenght of refactoredOriginalContenders should be 5',()=>{
    expect (refactoredOrginalContenders).to.be.equal(5);

});

it('orginalPersons should be same as refactored one',()=>{
    
   expect (originalPersons).to.be.eql(refactoredOrigianlPersons);
  
});

it('myArray should be same as refactored one',()=>{
     let myArray = [{
        id: 0,
        task: 'Do the thing'
      },
      {
        id: 1,
        task: 'Do the other thing... again'
      },
      {
        id: 2,
        task: 'Do the last thing'
      }]
    expect (myArray).to.be.eql(refactoredOriginalUpdates2);
   
 });

});