import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export const myNumbers = [10,20,30,40];
export const stream1 = of(myNumbers);
export const stream2 = stream1.pipe(map(val => val ));

stream2.subscribe(val => {
	console.log(val);
});
