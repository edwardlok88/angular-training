export interface Vehicle {

    name: string;
    gears: number;
    speed: number;

    decrementSpeed(value: number): void;
}

export class Car implements Vehicle{

    name: string;
    gears: number;
    speed: number;

    //multiple constructor decorations
    constructor();
    constructor(name: string, gears:Number);
    constructor(name: string, gears:number, speed:number);

    //single constructor implementation
    constructor(name?: string, gears?:number, speed?:number) {
        this.name = name;
        this.gears = gears;
        this.speed = speed;
    }

    decrementSpeed(value: number): void {
        this.speed -= value;
    }

}
var vehicle: Vehicle = new Car();
console.log("vehicle", vehicle);
vehicle.decrementSpeed(30);
console.log("vehicle", vehicle);

var vehicle1: Vehicle = new Car("Toyota Vios", 3);
console.log("vehicle1", vehicle1);
vehicle.decrementSpeed(30);
console.log("vehicle1", vehicle1);


var vehicle2: Vehicle = new Car("Toyota Vios", 5, 160);
console.log("vehicle2", vehicle2);
vehicle.decrementSpeed(30);
console.log("vehicle2", vehicle2);