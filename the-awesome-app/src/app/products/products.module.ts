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
