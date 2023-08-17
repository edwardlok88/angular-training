import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent {
  public data: Array<Customer> = [];
  public searchKey: string = "";
  public isShowEdit: boolean = false;
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
    this.selectedCustomer = customer;
  }

  hideEdit() {
    this.isShowEdit = false;
  }
}
