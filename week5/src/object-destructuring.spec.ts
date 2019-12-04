import { object, nestedObject,person,job,
user,address,id,stmt } from './object-destructuring';
import { expect } from 'chai';
import 'mocha';

describe('Object destructuring tests', () => {
  
  it('#1 should have a variable for every property in the given object', () => {
    
    expect (person).to.equal(object.name);
    expect (job).to.equal(object.title);
  });
it('#2 should have a variable for every property in the given nested object', () => {
    expect (user).to.equal(nestedObject.user);
    expect (address).to.equal(nestedObject.address);
    expect (id).to.equal(nestedObject.id);
});
 
  it('#3 should create a new object given the destrutured variables from the nested object', () => {
    
    expect (address.city).to.equal('denver');
    expect (address.state).to.equal("colorado");

  });

  it('#4 should construct a statement from the given object', () => {

    expect (stmt).to.be.equal('hello, taylor!');

  });
});