import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { ProductsModule } from './products/products.module';
import { ListProductsComponent } from './products/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
