import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppValidators } from '../app-shared/app-validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;
  public message: string = "";
  public isFormValid: boolean = false;
  public cityOptions: string[];

  //inject async validators
  constructor(private appValidators: AppValidators) {

    this.cityOptions = new Array<string>();
    this.cityOptions.push("Mumbai");
    this.cityOptions.push("Hyderabad");
    this.cityOptions.push("Bangalore");
    this.cityOptions.push("Chennai");
    this.cityOptions.push("Delhi");

    this.formGroup = new FormGroup({
      //parameter: 2nd->sync validators, 3rd -> async validators
      name: new FormControl("", [Validators.required, AppValidators.forbiddenValidator(["admin", "manager"])], [appValidators.checkUniqueness()]),
      pwd: new FormControl("", [Validators.required], []),
      mobile: new FormControl("", [AppValidators.mobileValidator], []),
      city: new FormControl("", [], []),
    })
  }

  ngOnInit(): void {
  }

  register() {
    if (this.formGroup.valid) {
      this.message = "Valid Form";
      this.isFormValid = true;
    } else {
      this.message = "Invalid Form";
      this.isFormValid = false;
    }
  }
}