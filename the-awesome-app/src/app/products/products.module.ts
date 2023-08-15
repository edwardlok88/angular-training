import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductFilterPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ListProductsComponent]
})
export class ProductsModule {

}
