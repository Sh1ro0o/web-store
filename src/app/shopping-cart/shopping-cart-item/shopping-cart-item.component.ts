import { Component, Input } from '@angular/core';
import { ShoppingCartItem } from 'src/app/shared/Models/shopping-cart-item.model';
import { ShoppingCartService } from 'src/app/shared/Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
  @Input() shoppingCartItem: ShoppingCartItem;

  constructor(private shoppingCartService: ShoppingCartService) { }

  increaseAmmount() {
    this.shoppingCartItem.increaseAmmount(1);
  }

  decreaseAmmount() {
    if(this.shoppingCartItem.getAmmount() > 1)
      this.shoppingCartItem.decreaseAmmount(1);
  }

  removeItem() {
    this.shoppingCartService.removeItem(this.shoppingCartItem);
  }
}
