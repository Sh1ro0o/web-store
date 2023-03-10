//Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';
import { ItemDetailsComponent } from './item-list/item-details/item-details.component';
import { UserSignInComponent } from './user/user-sign-in/user-sign-in.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

//routing
import { Routes, RouterModule } from '@angular/router';

//directives
import { GridColsDirective } from './shared/Directives/GridColumns.directive';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';

const appRoutes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'user/sign-in', component: UserSignInComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/profile', component: UserProfileComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemListComponent,
    ItemComponent,
    GridColsDirective,
    ItemDetailsComponent,
    UserSignInComponent,
    UserRegisterComponent,
    UserProfileComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
