import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../../app/model/customer';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent {
  public data: Array<Customer> = [];
  public searchKey: string = "";
  public isShowEdit: boolean = false;
  public nCustomer: Customer = new Customer();
  public selectedCustomer: Customer = new Customer();
  private url: string = environment.customersUrl;

  constructor(private httpClient: HttpClient, private router: Router) {
    //subscribe to observable
    httpClient.get<Array<Customer>>(this.url)
      .subscribe({
        next: (data) => { console.log("next", data); this.data = data },
        error: (error) => { console.log("error", error) },
        complete: () => { console.log("completed") }
      });
  }

  editCustomer(customer: Customer) {
    this.isShowEdit = true;
    this.nCustomer = customer;
    this.selectedCustomer = {...customer}; //spread operator to avoid changing referenced memory value
  }

  hideEdit() {
    this.isShowEdit = false;
    window.location.reload();
  }
}
