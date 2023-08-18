import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class AppValidators {
    //<input class="form-control" type="number" formControlName="mobile" />
    static mobileValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value) {
            //regular
            const rule = /[0-9]{10}/;
            const isValid = rule.test(value);
            return isValid ? null : { mob: "invalid" };
        } else {
            return null;
        }
    }

    static forbiddenValidator(forbiddenValues: string[]): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (value) {
                const index = forbiddenValues.findIndex(item => item === value);
                if (index === -1) {
                    return null;
                } else {
                    return { forbidden: "invalid" }
                }
            }

            return null;
        }
    }
}
