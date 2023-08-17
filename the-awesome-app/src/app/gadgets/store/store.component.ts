import { Component } from '@angular/core';
import { GadgetsService } from '../gadgets.service';
import { Product } from '../../model/product';
import { CartItem } from 'src/app/model/cartitem';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  products: Array<Product> = [];

  constructor(private gadgetsService: GadgetsService) {
    console.log(gadgetsService.getVersion());
    //this.invokeCallbackImpl();
    //this.invokePromiseImpl();
    // this.invokePromiseWithAwaitImpl();

    this.gadgetsService
      .getProducts()
      .subscribe({
        next: (data => {
          this.products = data;
          console.log("success observable", data)
        })
      })
  }

  //call service with callback
  invokeCallbackImpl() {
    this.gadgetsService.getProductsWithCallbacks((data) => {
      console.log("success callback", data);
    }, (error) => {
      console.log("error callback", error);
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

  //call service with promise
  async invokePromiseWithAwaitImpl() {
    try {
      const data = await this.gadgetsService.getProductsWithPromise()
      console.log("fullfiled promise awaited", data);
    } catch (error) {
      console.log("fullfiled promise catch", error);
    }
  }

  add(item: Product, quantity: string) {
    this.gadgetsService.addToCart(new CartItem(item, Number(quantity)));
  }
}
