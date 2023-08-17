import { Component } from '@angular/core';
import { CartItem } from '../../model/cartitem';
import { GadgetsService } from '../gadgets.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {
  cart: Array<CartItem> = [];

  constructor(private gadgetService: GadgetsService) {
    this.cart = gadgetService.getCart();

    this.gadgetService.subject.subscribe((cart) => {
      this.cart = cart;
    });
  }
}
