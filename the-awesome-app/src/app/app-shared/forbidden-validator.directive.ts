import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

// For Templated Form
// <input appForbiddenValidator="admin, manager"/>
@Directive({
  selector: '[appForbiddenValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenValidatorDirective,
    multi: true
  }]
})
export class ForbiddenValidatorDirective implements Validator {

  @Input()
  appForbiddenValidator: string = "";

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value;
    if (value) {
      const forbiddenValue = this.appForbiddenValidator.split(",");
      const index = forbiddenValue.findIndex(item => item === value);
      if (index === -1) {
        return null;
      } else {
        return { forbidden: "invalid value" };
      }
    }

    return null;
  }


}
