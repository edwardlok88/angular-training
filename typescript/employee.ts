export class Employee {

    private _location: string;

    constructor(public id?: number, public name?: string, public salary?: number){}

    // property
    public get location() {return this._location;}
    public set location(value: string) {this._location = value; }
}

var emp = new Employee(1, "loki", 5000);
console.log("emp", emp);
var emp = new Employee();
emp.location = "Bayan Lepas";
console.log("emp", emp);