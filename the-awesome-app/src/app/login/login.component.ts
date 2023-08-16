import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginFormGroup: FormGroup;
  private url: string = "http://localhost:9000/login/";

  constructor(private httpClient: HttpClient, private router: Router) {
    this.loginFormGroup = new FormGroup({
      userName: new FormControl("", [Validators.required], []),
      password: new FormControl("", [Validators.required], [])
    });
  }

  login() {
    if (this.loginFormGroup.valid) {
      const username = this.loginFormGroup.get("userName")?.value;
      const password = this.loginFormGroup.get("password")?.value;
      console.log("username", "password", username, password);
      this.httpClient.post(this.url, { name: username, password: password })
        .subscribe({
          next: (data) => {
            this.router.navigate(["/products"]);
          },
          error: () => {
            alert("Unauthorized login..")
          }
        })
    } else {
      alert("Invalid form");
    }
  }

}
