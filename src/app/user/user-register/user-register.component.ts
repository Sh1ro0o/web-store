import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { User } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/Services/user.service';
import { Router } from '@angular/router';
import { passwordContainsLowerCaseValidator } from 'src/app/shared/Validators/password-contains-lowercase';
import { passwordContainsNumberValidator } from 'src/app/shared/Validators/password-contains-number';
import { passwordContainsUpperCaseValidator } from 'src/app/shared/Validators/password-contains-uppercase';
import { passwordMatchesValidator } from 'src/app/shared/Validators/password-matches';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const formGroupCustomValidators: AbstractControlOptions = {
      validators: [passwordMatchesValidator]
    }

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), passwordContainsLowerCaseValidator,
      passwordContainsUpperCaseValidator, passwordContainsNumberValidator]],
      rePassword: ['', [Validators.required]]
    }, formGroupCustomValidators);
  }

  onSubmit() {
    this.user = new User(
      this.registerForm.get('username').value,
      this.registerForm.get('password').value,
      this.registerForm.get('email').value);

    //user gets registered and then signed in
    this.userService.registerUser(this.user);

    //resets input fields
    this.registerForm.reset();

    //forwads to home page
    this.router.navigate(['/']);
  }

}
