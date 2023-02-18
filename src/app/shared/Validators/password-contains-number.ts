import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export function passwordContainsNumberValidator(password: AbstractControl) : ValidationErrors | null {
  const regex = /[0-9]/g

  if(regex.test(password.value)) {
    return null;
  } else {
    return ({ number : true });
  }
}
