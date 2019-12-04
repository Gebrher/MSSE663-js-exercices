import { fruits, food,a,b,a2,b2,others,stmt } from './array-destructuring';
import { expect } from 'chai';
import 'mocha';

describe('Array destructuring tests', () => {
 it('#1 should have a variable for every element in the given array', () => {
      
      expect (a).to.equal(fruits[0]);
      expect (b).to.equal(fruits[1]);
  });
   it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect (a2).to.equal(food[0]);
    expect (b2).to.equal(food[1]);
    expect (others[0]).to.equal(food[2]);

  });

  it('#3 should construct a statement from the given objarrayect', () => {

    expect (stmt).to.be.equal('hello, taylor!');

  });
});