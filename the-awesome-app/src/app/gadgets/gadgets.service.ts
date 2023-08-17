import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject, Observable, Subject, firstValueFrom } from 'rxjs';
import { CartItem } from '../model/cartitem';
import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class GadgetsService {

  private url: string;
  private cart: Array<CartItem> = [];
  //public subject: Subject<Array<CartItem>> = new Subject();// subject
  public subject: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>([]); //behaviour subject

  //Represents the cart and notifies when the cart changes with new updated cart;
  constructor(private httpClient: HttpClient) {
    this.url = environment.productsUrl;
  }

  getVersion() {
    return "Gadget Service 1.0";
  }

  getProductsWithCallbacks(successCallBack?: (data: Array<Product>) => void,
    errorCallBack?: (resp: any) => void): void {
    this.httpClient.get<Array<Product>>(this.url)
      .subscribe({
        next: (data) => {
          if (successCallBack) {
            successCallBack(data);
          }
        },
        error: (resp) => {
           if (errorCallBack) {
            errorCallBack(resp);
          }
        }
      });
  }

  getProductsWithPromise(): Promise<Array<Product>> {
    return firstValueFrom(this.httpClient.get<Array<Product>>(this.url));
  }

  getProducts() : Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.url);
  }

  addToCart(cartItem: CartItem): void {
    this.cart.push(cartItem);

    //raise notification(publish)
    this.subject.next(this.cart);
  }

  getCart(): Array<CartItem> {
    return [...this.cart];
  }
}
