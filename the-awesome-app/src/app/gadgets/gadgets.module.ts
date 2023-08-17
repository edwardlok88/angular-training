import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { GadgetsService } from './gadgets.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: "gadgets", component: MainComponent, children: [
      { path: "store", component: StoreComponent },
      { path: "viewcart", component: ViewCartComponent }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    StoreComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    //{provide: GadgetsService, useClass: GadgetsService}
    GadgetsService
  ]
})
export class GadgetsModule { }