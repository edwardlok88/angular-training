import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';
import { ViewCartComponent } from './view-cart/view-cart.component';



@NgModule({
  declarations: [
    MainComponent,
    StoreComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GadgetsModule { }