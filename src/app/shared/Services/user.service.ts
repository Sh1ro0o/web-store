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

  signInUser(username: string, password: string): boolean {
    //simulates database check if user exists
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].authorizeUser(username, password)) {
        this.currentUser = this.users[i];
        this.isUserSignedIn = true;
        this.isUserSignedInEmitter.next(this.isUserSignedIn);
        return true;
      }
    }
    console.log('no such user found!');
    return false;
  }

  signOutUser(): void {
    this.currentUser = null;
    this.isUserSignedIn = false;

    this.isUserSignedInEmitter.next(this.isUserSignedIn);
  }
}
