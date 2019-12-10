import { expect } from 'chai';
import 'mocha';
import { test1, test2, curriedResult, nestedResult, blackBelts, withStatus3 } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {

    expect(test1).to.equal(test2);

  });

  it('#2 should output the same result as the original function', () => {
    
   expect(nestedResult).to.equal(curriedResult);

  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {

    expect(blackBelts.toString).to.equal([
      { name: 'Raphael', belt: 'black' },
      { name: 'Leonardo', belt: 'black' },
      { name: 'Mr. Miyagi', belt: 'black' },
      { name: 'Rocky', belt: 'black' },
      { name: 'The Bride', belt: 'black' },
      { name: 'Cammy', belt: 'black' }
    ].toString);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    
    expect(withStatus3.toString).to.be.equal([ { name: 'Michelangelo', belt: 'white', status: 'Noob' } ].toString);
  });
});
