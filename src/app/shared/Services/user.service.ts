import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../Models/user.model";

@Injectable({providedIn: 'root'})
export class UserService {
  //we simulate users as if we are fetching them from the database
  private users: User[] = [new User('test', 'Test1234', 'test@gmail.com')];

  private currentUser: User;
  private isUserSignedIn: boolean = false;

  isUserSignedInEmitter = new Subject<boolean>();

  getSignedInUser(): User {
    return this.currentUser;
  }

  getIsUserSignedIn(): boolean {
    return this.isUserSignedIn;
  }

  registerUser(user: User): void {
    //registers
    this.users.push(user);

    //signs in
    this.currentUser = user;
    this.isUserSignedIn = true;
    this.isUserSignedInEmitter.next(this.isUserSignedIn);
  }

  signInUser(userToSignIn: User): void {
    //simulates database check if user exists
    let isUserValid = false;

    this.users.forEach(user => {
      if(user.isEqual(userToSignIn)) {
        this.isUserSignedIn = true;
        this.isUserSignedInEmitter.next(this.isUserSignedIn);
        return;
      }
    });

    console.log('no such user found!');
  }

  signOutUser(): void {
    this.isUserSignedIn = false;
    this.currentUser = null;
  }
}
