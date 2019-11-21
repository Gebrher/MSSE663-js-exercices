import { Car } from './app';
import { expect } from 'chai';
import 'mocha';

describe('Testing app.ts',()=>{
    const car1 = new Car('Ford','Track',2014,'Explorer');
    const car2 = new Car('Volvo','Sedan',1992,'V420');
    const car3 = new Car('BMW','SUV',2012,'X5');
    const car4 = new Car('Infinity','SUV',2020,'Q60');

    it('car1\'s maker should be Ford',()=>{
        expect (car1.isFord()).to.be.true;

});

it('car2\'s maker should be Volvo',()=>{
    expect (car2.maker).to.equal("Volvo");

});

it('it should return array of Vehicle maker',()=>{
    const arrays=car1.getObjects(car4,car2,car3);
    expect(arrays).to.include(car3);
  

});
});