import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/Models/user.model';
import { UserService } from '../shared/Services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  user: User;
  isUserSignedIn: boolean = false;
  signInSubscription: Subscription;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.signInSubscription = this.userService.isUserSignedInEmitter.subscribe(data => {
      this.isUserSignedIn = data;
      this.user = this.userService.getSignedInUser();
    })
  }

  ngOnDestroy(): void {
    this.signInSubscription.unsubscribe();
  }

  signOut(): void {
    this.userService.signOutUser();
  }
}
