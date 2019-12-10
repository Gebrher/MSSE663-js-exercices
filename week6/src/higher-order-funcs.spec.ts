import { mappedThings1,curriedResult,things } from './higher-order-funcs';
import { expect } from 'chai';
import 'mocha';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing1' }, { id: 2, name 'thing2' }]` after hoisting", () => {
    expect(mappedThings1.toString).to.equal([{ id: 1, name: 'thing1' }, { id: 2, name :'thing2' }].toString)
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
    expect(curriedResult.toString).to.equal(things.toString);
  });
});
