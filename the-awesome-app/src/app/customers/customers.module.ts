import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Defined the router-view (component) mapping
const routes: Routes = [
  // { path: "products", component: ListProductsComponent, canActivate: [AuthGuardFunction] },
  // { path: "products/:id", component: EditProductComponent, canActivate: [AuthGuardFunction] },
  { path: "customers", component: ListCustomersComponent },
  { path: "customers/:id", component: EditCustomerComponent }
]

@NgModule({
  declarations: [
    ListCustomersComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class CustomersModule { }
