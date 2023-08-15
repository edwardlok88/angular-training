import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { ProductsModule } from './products/products.module';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './products/list-products/list-products.component';

//Defined the router-view (component) mapping
const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "products", component: ListProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }