import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../app/model/customer';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  public customerId: number = 0;
  private url = environment.customersUrl;
  @Input()
  public customer: Customer = new Customer();
  @Output()
  customerUpdated: EventEmitter<void> = new EventEmitter(); // event binding - function call name

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }

  saveEdit() {
    const url = this.url;
    this.httpClient.put(url, this.customer)
      .subscribe({
        next: () => {
          alert("Customer updated");
          this.customerUpdated.emit();
        },
        error: () => {
          alert("Failed to update Customer")
        }
      });
  }
}
