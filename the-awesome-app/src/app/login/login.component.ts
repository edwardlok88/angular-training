import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { User } from '../model/user';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginFormGroup: FormGroup;
  private url: string = environment.loginUrl;
  public messageTitle: string = "";
  public message: string = "";
  public messageSeverity: string = "info";
  public showMessage: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
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
      this.httpClient.post<{ accessToken: string, refreshToken: string }>(this.url, { name: username, password: password })
        .subscribe({
          next: (data) => {
            this.showMessage = false;
            this.userService.setUserDetails(new User(username, true, data.accessToken));
            this.router.navigate(["/products"]);
          },
          error: () => {
            // alert("Unauthorized login..");
            this.showMessage = true;
            this.messageTitle = "Server Error";
            this.message = "Invalid credentials";
            this.messageSeverity = "error";
            this.userService.setUserDetails(new User());
          }
        })
    } else {
      // alert("Invalid form");
      this.showMessage = true;
      this.messageTitle = "User Error";
      this.message = "Please enter your credentials";
      this.messageSeverity = "error";
    }
  }

  hideMessage() {
    this.showMessage = false;
  }

}
