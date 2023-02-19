import { Injectable } from "@angular/core";
import { Item } from "../Models/item.model";
import { ShoppingCartItem } from "../Models/shopping-cart-item.model";

@Injectable({providedIn: 'root'})
export class ShoppingCartService {
  private shoppingCart: ShoppingCartItem[] = [new ShoppingCartItem(new Item('1','Santa', 30,'Soft santa plushie', 'assets/images/santa.jpg', 5))];

  //increases the ammount of a creatin item in shopping cart if item already exists inside
  addItem(item: Item): void {
    for(let i = 0; i < this.shoppingCart.length; i++) {
      if(this.shoppingCart[i].getItem().id === item.id) {
        this.shoppingCart[i].increaseAmmount(1);
        return;
      }
    }

    //otherwise we push a new item on
    this.shoppingCart.push(new ShoppingCartItem(item));
  }

  removeItem(item: ShoppingCartItem): void {
    this.shoppingCart.splice(this.shoppingCart.indexOf(item), 1);
  }

  getShoppingCart(): ShoppingCartItem[] {
    return this.shoppingCart;
  }
}
