import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { User } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent implements OnInit {
  signInForm: FormGroup;
  signInSuccessful: boolean = true;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }

  onSubmit(): void {
    //tries to sign in user
    this.signInSuccessful = this.userService.signInUser(this.signInForm.get('username').value, this.signInForm.get('password').value);

    //navigate to home page if sign in successful
    if(this.signInSuccessful) {
      this.router.navigate(['/']);
    }
  }
}
