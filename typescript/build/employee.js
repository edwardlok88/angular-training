export class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // property
    get location() { return this._location; }
    set location(value) { this._location = value; }
}
var emp = new Employee(1, "loki", 5000);
console.log("emp", emp);
var emp = new Employee();
emp.location = "Bayan Lepas";
console.log("emp", emp);
