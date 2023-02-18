import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export function passwordContainsUpperCaseValidator(password: AbstractControl) : ValidationErrors | null {
  const regex = /[A-Z]/g

  if(regex.test(password.value)) {
    return null;
  } else {
    return ({ upperCase : true });
  }
}
