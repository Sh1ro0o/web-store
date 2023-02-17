import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../Models/user.model";

@Injectable({providedIn: 'root'})
export class UserService {
  private currentUser: User;
  private isUserSignedIn: boolean = false;

  isUserSignedInEmitter = new Subject<boolean>();

  getSignedInUser(): User {
    return this.currentUser;
  }

  setSignedInUser(currentUser: User): void {
    this.currentUser = currentUser;
  }

  getIsUserSignedIn(): boolean {
    return this.isUserSignedIn;
  }

  setIsUserSignedIn(isUserSignedIn: boolean) {
    this.isUserSignedIn = isUserSignedIn;

    //we notify data is changed to subscribed
    this.isUserSignedInEmitter.next(isUserSignedIn);
  }
}
