import { stream2 } from './observable';

import { expect } from 'chai';
import 'mocha';

describe('Testing observable.ts', () => {
	it('Should put put "10"', () => {
		stream2.subscribe(val => {
			expect(val[0]).to.equal(10);
		});
    });
    
    it('Should put put "20"', () => {
		stream2.subscribe(val => {
			expect(val[1]).to.equal(20);
		});
    });
    
    it('Should put put "30"', () => {
		stream2.subscribe(val => {
			expect(val[2]).to.equal(30);
		});
	});
});