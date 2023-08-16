import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public productId: number = 0;
  public product: Product = new Product();
  private url = "http://localhost:9000/products/"

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private location: Location) {
    this.productId = activatedRoute.snapshot.params["id"];
    const url = this.url + this.productId;
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

  cancelEdit() {
    this.location.back();
  }

  saveEdit() {
    const url = this.url + this.productId;
    this.httpClient.put(url, this.product)
      .subscribe({
        next: () => {
          alert("Product updated");
          this.product = new Product();
          this.location.back();
          },
        error: () => {
          alert("Failed to update Product")
          }
      });
  }
}
