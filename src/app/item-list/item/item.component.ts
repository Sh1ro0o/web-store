import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/shared/Models/item.model';
import { ShoppingCartService } from 'src/app/shared/Services/shopping-cart.service';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Item;
  addedToCart: boolean = false;

  constructor(private itemDetailsDialog: MatDialog, private shoppingCartService: ShoppingCartService) { }

  displayItemDetails() {
    let dialogRef = this.itemDetailsDialog.open(ItemDetailsComponent, {
      data: this.item,
    });
  }

  addToCart() {
    this.shoppingCartService.addItem(this.item);
    this.addedToCart = true;
  }
}
