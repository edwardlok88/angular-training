import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  public data: Array<Product> = [];
  public nProduct: Product = new Product();
  public searchKey: string = "";
  private url: string = environment.productsUrl;

  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {

    const accessToken = userService.getAccessToken();
    const headers = {Authorization: `Bearer ${accessToken}`};

    //subscribe to observable
    httpClient.get<Array<Product>>(this.url, {headers})
      .subscribe({
        next: (data) => {console.log("next", data); this.data = data},
        error: (error) => {console.log("error", error)},
        complete: ()=> {console.log("completed")}
      });
  }

  saveProduct() {
    this.httpClient.post(this.url, this.nProduct)
      .subscribe({
        next: () => {
          alert("Product saved");
          this.data.push(this.nProduct);
          this.nProduct = new Product();
          },
        error: () => {
          alert("Failed to save Product")
          }
      });
  }

  deleteProduct(product: Product) {
    const url = this.url + "/" + product.id;
    this.httpClient.delete(url)
      .subscribe({
        next: () => {
          alert("Product deleted");
          const index = this.data.findIndex(item => item.id === product.id)
          this.data.splice(index, 1);
          },
        error: () => {
          alert("Failed to delete Product")
          }
      });
  }

  editProduct(product: Product) {
    //url navigation
    this.router.navigate(["/products", product.id]);
  }
}