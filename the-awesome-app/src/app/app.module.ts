import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { ProductsModule } from './products/products.module';
import { RouterModule, Routes } from '@angular/router';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { GadgetsModule } from './gadgets/gadgets.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

//Defined the router-view (component) mapping
const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: ViewNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent,
    ViewNotFoundComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    RouterModule.forRoot(routes),
    GadgetsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }