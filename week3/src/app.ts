export interface Vehicle {
    maker:string;
    type:string;
    year:number;
    isFord:()=>boolean;
    getObjects:(vl:Vehicle,v2:Vehicle,v3:Vehicle)=>Vehicle[];

}

export class Car implements Vehicle{
    model:string;
    constructor(public maker:string,public type:string,public year:number,model:string){
        this.maker=maker;
        this.type=type;
        this.year=year
        this.model=model;

    }

    isFord():boolean {
        return this.maker==="Ford";
    }

    getObjects(v1:Vehicle,v2:Vehicle,v3:Vehicle):Vehicle[]{
        return [v1,v2,v3];
    }
}

let car1 = new Car('Toyotoa','sedan',2009,'camry');
let car2 = new Car('Ford','sedan',2002,'taurus');
let car3 = new Car('Nissan','Suv',2015,'Defender');

console.log('My second car is Ford and it is '+car2.isFord());

console.log('I own the following cars '+ JSON.stringify(car1.getObjects(car1,car2,car3)));
