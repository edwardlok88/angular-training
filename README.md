# Angular Training

## TypeScript Fundamentals

### Types

[source code](typescript/hello.ts)

```typescript
console.log("Hello Typescript12345");
//1 - Type Inference
var x = 10;
console.log("x", x);
//x = "abc"; // compilation error=? static type checking
var y;
console.log("y", y);
y = 20;
console.log("y", y);
y = "abc";
console.log("y", y);
//2 - Type annotation
var z;
z = "apple";
//z = 100; // compilation error
console.log("z", z);
var user;
user = { id: 10, name: "loki" };
console.log("user", user);
```

### Compilation

### Scoping using Let and Const Keywords

[source code](typescript/scopes.js)

```javascript
console.log("x", x); //undefined - Hoisting
let x = 10;
console.log("x", x); //10

var y;
console.log("y", y); //undefined

// console.log("z", z); //unhandled error

foo();
function foo() {
    console.log("in foo...");
    var z = 100;
    if (z > 10) {
        let msg = "Hello foo";
    }
    // console.log("msg", msg); // expcetion when using let
}

console.log("App over"); // App over
```

### Interfaces

[source code](typescript/vehicle.ts)

```typescript
export interface Vehicle {

    name: string;
    gears: number;
    speed: number;

    decrementSpeed(value: number): void;
}
```

### Classes & Inheritance

[source code](typescript/vehicle.ts)

```typescript
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
```

### ES Modules

[tsconfig.json](typescript/tsconfig.json)

```json
{
    "compilerOptions": {
        "target": "ES6",
        "outDir": "build",
        "noEmitOnError": true
    }
}
```

### Arrow Functions

[source code](typescript/functions.ts)

```typescript
//arrow function
let calc = (x: number, y: number) => {
    return x + y;
}

console.log("calc", add(10, 20));

calc = (x: number, y: number) => x * y;
calc(20, 30);

console.log("calc", add(10, 20));
```

### Dynamic Module loading

[source code](typescript/two.js)

```javascript
import {add, multiply} from "./one.js"; //named import
import one from "./one.js"; //default import
```

## Angular CLI

### Creating an angular project

### Updating the project

### Generating Code

### Build and testing tools

### Customization

## Angular Building Blocks

### Components

### Templates

### Modules

### Models

## Template Syntax & Data Binding

### HTML in templates

### Interpolation

### Binding syntax

### Property binding

### Event binding

### Two-way data binding

### Data Binding Example

### Attribute, class, and style bindings

### Built-in Directives

### Template Input Variables

### The NgSwitch Directives

### Template Reference Variables

### Input and output properties Components Deep Dive

### Component Lifecycle Hooks

### Implementing the Lifecycle methods

### Component Communication

### Sharing data between components

## Services

### Creating Services

### Using a services to access data

### Using a service to encapsulate business logic

## Dependency Injection

### Understanding Dependency Injection

### Angular’s Dependency Injection System

### Registering

### Injecting

## Template-driven Forms

### NgSubmit Directive

### FormsModule

### NgForm, NgModel, and NgModelGroup Directives

### Validation Directives

## RXJS

### Reactive Programming

### Observables and Observer

### Operators

### Errors and Exceptions

## Communicating with the Server using the Http Service

### Deciding between Promises or Observables (RxJS)

### Making Http GET Requests

### Making Http POST and PUT Requests

### Issuing a Http DELETE Request

### Consuming RESTful Services

### WebSockets(Introduction)

## Single Page Applications using Router

### Importing the RouterModule and Routes

### Configuring Routes

### Displaying Components using a RouterOutlet

### Navigating with RouterLink and RouterLinkActive Directives or the Router

### Accessing parameters using ActivedRoute

### Organizing your code into Modules

### Lazy-loading Angular Modules

### Location Strategies

### Nested or Child Routes

### Route Guards

## Security

### How to Prevent Cross-site Scripting (XSS)

### Trusting values with the DOMSanitizer

### HTTP Attacks

## Advanced Components

### Component Styles using MetaData properties: Styles and StyleUrls

### Change Detection Strategies

[source code](the-awesome-app/src/app/login/login.component.ts#L13)

``` Typescript
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated
})
```

### Component Lifecycle Hooks 2

## Model-driven Forms (Reactive Forms)

### ReactiveFormsModule

### AbstractControl, FormControl, FormGroup, and FormArray

### FormBuilder

### Validators

### Creating Dynamic Forms

## Attribute Directives

### Creating a custom Attribute Directive using ElementRef, Render

### Creating a custom structural Directive

## Pipes

### Built-in Pipes: Using, Passing Parameters, Chaining

### Creating a custom Pipe using PipeTransform

### Pure and Impure pipes

## Web Workers, Ivy and Bazel, Differential Loading, Testing

### Understanding Jasmine.js

### Writing specifications in Jasmine.js

### Learning built-in matchers

### Covering before and after

### Use Karma for browser testing

### Testing Angular components

### Creating End to End testing with protractor

### Configuring and using Karma

## Creating, Building, and Deploying an Angular Application

### Manually

### Using the Angular CLI with Ahead-Of-Time (AOT) Compilation

### Pre-loading and lazy loading

## Using Libraries

### Exploring Angular UI Components

### Ng-bootstrap

### PrimeNG

### Angular Material
