import { fruits, food,c,d } from './array-destructuring';
import { expect } from 'chai';
import 'mocha';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
      var [a,b] = fruits;
      expect (a).to.equal(fruits[0]);
      expect (b).to.equal(fruits[1]);

    });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {

    var [a,b,...c] = food;

    expect (a).to.equal(food[0]);
    expect (b).to.equal(food[1]);
    expect (c[0]).to.equal(food[2]);

  });

  it('#3 should construct a statement from the given objarrayect', () => {
    
    expect ('hello, taylor!').to.be.equal(c+','+' '+d+'!');
  });
});
