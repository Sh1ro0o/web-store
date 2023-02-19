import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../shared/Models/shopping-cart-item.model';
import { ShoppingCartService } from '../shared/Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }
}
