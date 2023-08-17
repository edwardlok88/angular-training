import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, firstValueFrom } from 'rxjs';
import { CartItem } from '../model/cartitem';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class GadgetsService {

  private url: string;
  private cart: Array<CartItem> = [];

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:9000/products";
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
  }

  getCart(): Array<CartItem> {
    return [...this.cart];
  }
}
