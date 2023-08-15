import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { RouterModule, Routes } from '@angular/router';

//Defined the router-view (component) mapping
const routes: Routes = [
  {path: "products", component: ListProductsComponent}
]

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductFilterPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ListProductsComponent]
})
export class ProductsModule {

}
