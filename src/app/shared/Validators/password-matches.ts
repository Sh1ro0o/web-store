import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchesValidator(fg: AbstractControl): ValidationErrors | null {
  const password = fg.get('password').value;
  const rePassword = fg.get('rePassword').value;

  if(password === rePassword)
    return null;
  else
    return ({passwordsMatch: true});
}
