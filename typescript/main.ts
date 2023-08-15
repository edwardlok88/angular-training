import { Vehicle, Car } from "./vehicle.js";
import { Employee } from "./employee.js";

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

var emp = new Employee(1, "loki", 5000);
console.log("emp", emp);
var emp = new Employee();
emp.location = "Bayan Lepas";
console.log("emp", emp);