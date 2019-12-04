import { object, nestedObject,c,d } from './object-destructuring';
import { expect } from 'chai';
import 'mocha';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    var {name:person,title:job}= object;
      expect (person).to.equal(object.name);
      expect (job).to.equal(object.title);

  });

  it('#2 should have a variable for every property in the given nested object', () => {
    var {user:user, address:address,id} = nestedObject;
    expect (user).to.equal(nestedObject.user);
    expect (address).to.equal(nestedObject.address);
    expect (id).to.equal(nestedObject.id);

  });

  it('#3 should create a new object given the destrutured variables from the nested object', () => {
    var {address:address} = nestedObject;
    var newObj = address;
    expect ('denver').to.equal(newObj.city);
    expect ('colorado').to.equal(newObj.state);
    
  });

  it('#4 should construct a statement from the given object', () => {

    expect ('hello, taylor!').to.be.equal(c+','+' '+d+'!');
  });
});
