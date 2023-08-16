import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public productId: number = 0;
  public product: Product = new Product();

  constructor(private activatedRoute: ActivatedRoute, httpClient: HttpClient) {
    this.productId = activatedRoute.snapshot.params["id"];
    const url = "http://localhost:9000/products/" + this.productId;
    httpClient.get(url)
              .subscribe({
                next: (data => {
                  this.product = data;
                }),
                error: () => {
                  alert("Cannot read record..")
                }
              })
  }
}
