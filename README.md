# Angular Training

## TypeScript Fundamentals

### Types & Compilation

[hello.ts](typescript/hello.ts)

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

### Scoping using Let and Const Keywords

[scopes.ts](typescript/scopes.ts)

```typescript
console.log("x", x); //undefined - Hoisting
console.log("z", z); //undefined - Hoisting
let x = 10;
const z = 20;
console.log("x", x); //10
console.log("z", z); //20
```

### Interfaces

[vehicle.ts](typescript/vehicle.ts)

```typescript
export interface Vehicle {

    name: string;
    gears: number;
    speed: number;

    decrementSpeed(value: number): void;
}
```

### Classes & Inheritance

[vehicle.ts](typescript/vehicle.ts)

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

## Angular CLI

### Creating an angular project

``` cli
ng new the-awesome-app
```

### Updating the project

### Generating Code

[cli reference](https://angular.io/cli/generate)

``` cli
ng g module module-name
ng g component component-name
ng g service service-name
ng g directive directive-name
ng g interceptor interceptor-name
ng g pipe pipe-name
ng g interface interface-name
ng g class class-name
ng g environement environment-name
```

### Build and testing tools

``` cli
ng serve --open
```

### Customization

## Angular Building Blocks

### Components

[edit-products.component.ts](the-awesome-app/src/app/products/edit-product/edit-product.component.ts)

``` typescript
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../../../app/model/product';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public productId: number = 0;
  public product: Product = new Product();
  private url = environment.productsUrl

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private location: Location) {
    this.productId = activatedRoute.snapshot.params["id"];
    const url = this.url + "/"+ this.productId;
    httpClient.get(url)
              .subscribe({
                next: (data => {
                  this.product = data;
                }),
                error: () => {
                  alert("Cannot read record..")
                }
              })
  }

  cancelEdit() {
    this.location.back();
  }

  saveEdit() {
    const url = this.url + "/"+ this.productId;
    this.httpClient.put(url, this.product)
      .subscribe({
        next: () => {
          alert("Product updated");
          this.product = new Product();
          this.location.back();
          },
        error: () => {
          alert("Failed to update Product")
          }
      });
  }
}
```

### Templates

[edit-product.component.html](the-awesome-app/src/app/products/edit-product/edit-product.component.html)

```html
<p>list-products works!</p>
<h4>List products</h4>

<div>
    <input type="search" placeholder="Search Products" [(ngModel)]="searchKey"/>
</div>
<p *ngIf="searchKey">
    Search results for {{searchKey}}
</p>
<table>
    <thead>
        <tr>
            <th>Index</th>
            <th>Product Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <!-- Iterate over data and create tr for each product -->
        <tr *ngFor="let item of data | productFilter: searchKey; index as i; even as even; odd as odd"
            [ngClass]="{oddCls: odd, evenCls: even}">
            <td>{{i}}</td>
            <td>{{item.id}}</td>
            <td>{{item.name | uppercase}}</td>
            <td>{{item.price | currency: "RM"}}</td>
            <td>{{item.description}}</td>
            <td>
                <button class="btn btn-danger" (click)="deleteProduct(item)">Delete</button>
                &nbsp;
                <button class="btn btn-warning" (click)="editProduct(item)">Edit</button>
            </td>
        </tr>
        <tr>
            <td>
                <button (click)="saveProduct()">Save</button>
            </td>
            <td>
                <input type="number" placeholder="Id" [(ngModel)]="nProduct.id">
            </td>
            <td>
                <input placeholder="Name" [(ngModel)]="nProduct.name">
            </td>
            <td>
                <input placeholder="Price" [(ngModel)]="nProduct.price">
            </td>
            <td>
                <input placeholder="Description" [(ngModel)]="nProduct.description">
            </td>
        </tr>

    </tbody>
</table>
```

### Modules

[products.module.ts](the-awesome-app/src/app/products/products.module.ts)

``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthGuardFunction, AuthGuardService } from '../services/auth-guard.service';
import { AppSharedModule } from '../app-shared/app-shared.module';

//Defined the router-view (component) mapping
const routes: Routes = [
  { path: "products", component: ListProductsComponent, canActivate: [AuthGuardFunction] },
  { path: "products/:id", component: EditProductComponent, canActivate: [AuthGuardFunction] }
]

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductFilterPipe,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppSharedModule
  ],
  exports: [
    //is not necessary because product use url navigation
    //ListProductsComponent
  ]
})
export class ProductsModule {

}
```

### Models

[product.ts](the-awesome-app/src/app/model/product.ts)

```typescript
export class Product{
    constructor(public id?: number,
                public name?: string,
                public description?: string,
                public price?: string,
                public imageUrl?: string) {}

}
```

## Template Syntax & Data Binding

### HTML in templates

### Interpolation

[databinding.component.html](the-awesome-app/src/app/databinding/databinding.component.html)

```html
<div>
    Name: {{name}}
</div>
<div>
    <h2>Interpolation</h2>
    Expression: {{5 + 7}}
</div>
```

[databinding.component.ts](the-awesome-app/src/app/databinding/databinding.component.ts)

```typescript
count: name;
```

### Binding syntax

### Property binding

[databinding.component.html](the-awesome-app/src/app/databinding/databinding.component.html)

```html
 <div>
    <h2>Property binding</h2>
    Count: <input type="number" [value]="count" />
    <p id="ctr">{{count}}</p>
</div>
```

[databinding.component.ts](the-awesome-app/src/app/databinding/databinding.component.ts)

```typescript
count: number;
```

### Event binding

[databinding.component.html](the-awesome-app/src/app/databinding/databinding.component.html)

```html
<div>
    <h2>Event binding</h2>
    <button (click)="inc($event)">Increment</button>
</div>
```

### Two-way data binding

[databinding.component.html](the-awesome-app/src/app/databinding/databinding.component.html)

```html
<div>
    <h2>Two way binding using ngModel</h2>
    Message: <input [(ngModel)]="message" />
    <p>{{message}}</p>
</div>
<div>
    <h2>Two way binding custom</h2>
    Count: <input type="number" [value]="count" (input)="update($event)" />
    <p>{{count}}</p>
</div>
```

[databinding.component.html](the-awesome-app/src/app/databinding/databinding.component.html)

```typescript
count: number;
message: string;

update(evt: any) {
    this.count = evt.target.value;
}
```

### Data Binding Example

### Attribute, class, and style bindings

### Built-in Directives

[databinding.component.html](the-awesome-app/src/app/databinding/databinding.component.html)

```html
<div [hidden]="!var1.checked">

</div>
```

### Template Input Variables

[list-products.component.html](the-awesome-app/src/app/products/list-products/list-products.component.html)

```html
<tr *ngFor="let item of data | productFilter: searchKey; index as i; even as even; odd as odd" [ngClass]="{oddCls: odd, evenCls: even}">
        <td>{{i}}</td>
        <td>{{item.id}}</td>
        <td>{{item.name | uppercase}}</td>
        <td>{{item.price | currency: "RM"}}</td>
        <td>{{item.description}}</td>
</tr>
```

[list-products.component.ts](the-awesome-app/src/app/products/list-products/list-products.component.ts)

```typescript
public data: Array<Product> = [];
```

### The NgSwitch Directives

### Template Reference Variables

[list-product.component.ts](the-awesome-app/src/app/products/edit-product/edit-product.component.ts)

``` html
<form #form #formGroup="ngForm">
    <div class="form-group">
        <button class="btn btn-success" (click)="saveEdit()"
            [disabled]="formGroup.pristine || formGroup.invalid">Save</button>
    </div>
</form>
```

### Input and output properties Components Deep Dive

[login.component.ts](the-awesome-app/src/app/login/login.component.ts)

```html
<app-alert *ngIf="showMessage" [title]="messageTitle" [message]="message" [severity]="messageSeverity" (closed)="hideMessage()"></app-alert>
```

[alert.component.ts](the-awesome-app/src/app/app-shared/alert/alert.component.ts)

```typescript
@Input()
title: string = "Title"; // property binding
@Input()
message: string = ""; // property binding
@Input()
severity: string = "info"; // roperty binding - info, success, warning, error
@Output()
closed: EventEmitter<void> = new EventEmitter(); // event binding - function call name
```

### Component Lifecycle Hooks

### Implementing the Lifecycle methods

[alert.component.ts](the-awesome-app/src/app/app-shared/alert/alert.component.ts)

```typescript

export class AlertComponent implements OnChanges, OnInit, AfterContentInit, OnDestroy {
    ngOnDestroy(): void {
        console.log("AlertComponent ngOnDestroy:", this.title, this.message, this.severity);
    }

    ngAfterContentInit(): void {
        console.log("AlertComponent ngAfterContentInit:", this.title, this.message, this.severity);
    }

    ngOnInit(): void {
        console.log("AlertComponent ngOnInit", this.title, this.message, this.severity);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("AlertComponent ngOnChanges:", changes);
        console.log("AlertComponent ngOnChanges:", this.title, this.message, this.severity);
        this.changeSeverityCss();
    }
}

```

### Component Communication

[app-shared.component.ts](the-awesome-app/src/app/app-shared/app-shared.component.ts)

```typescript
//remember to export the directive since its a shared directive
exports: [
    AlertComponent,
    HighlightDirective,
    ForbiddenValidatorDirective
  ]
```

### Sharing data between components

[app.module.ts](the-awesome-app/src/app/app.module.ts)

```typescript
imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    RouterModule.forRoot(routes),
    GadgetsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppSharedModule,
    CustomersModule
  ]
```

[login.component.ts](the-awesome-app/src/app/login/login.component.ts)

```html
<app-alert *ngIf="showMessage" [title]="messageTitle" [message]="message" [severity]="messageSeverity" (closed)="hideMessage()"></app-alert>
```

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

## npm install

```npm
npm i serve -g
```
