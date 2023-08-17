import { Component } from '@angular/core';
import { GadgetsService } from '../gadgets.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private gadgetsService: GadgetsService) {
    console.log(gadgetsService.getVersion());
    //this.invokeCallbackImpl();
    this.invokePromiseImpl();
  }

  //call service with callback
  invokeCallbackImpl() {
    this.gadgetsService.getProductsWithCallbacks((data) => {
      console.log("success callback", data)
    }, (error) => {
      console.log("error callback", error)
    })
  }

  //call service with promise
  invokePromiseImpl() {
    this.gadgetsService.getProductsWithPromise()
      .then((data) => {
        console.log("fullfilled promise", data);
      })
      .catch(error => {
        console.log("rejected promise", error);
      })
  }
}
