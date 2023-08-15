export class Car {
    //single constructor implementation
    constructor(name, gears, speed) {
        this.name = name;
        this.gears = gears;
        this.speed = speed;
    }
    decrementSpeed(value) {
        this.speed -= value;
    }
}
var vehicle = new Car();
console.log("vehicle", vehicle);
vehicle.decrementSpeed(30);
console.log("vehicle", vehicle);
var vehicle1 = new Car("Toyota Vios", 3);
console.log("vehicle1", vehicle1);
vehicle.decrementSpeed(30);
console.log("vehicle1", vehicle1);
var vehicle2 = new Car("Toyota Vios", 5, 160);
console.log("vehicle2", vehicle2);
vehicle.decrementSpeed(30);
console.log("vehicle2", vehicle2);
