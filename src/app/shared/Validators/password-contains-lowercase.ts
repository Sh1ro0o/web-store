import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export function passwordContainsLowerCaseValidator(password: AbstractControl) : ValidationErrors | null {
  const regex = /[a-z]/g

  if(regex.test(password.value)) {
    return null;
  } else {
    return ({ lowerCase : true });
  }
}
