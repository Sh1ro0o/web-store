import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/shared/Models/item.model';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Item;

  constructor(private itemDetailsDialog: MatDialog) { }

  displayItemDetails() {
    let dialogRef = this.itemDetailsDialog.open(ItemDetailsComponent, {
      data: this.item,
    });
  }
}
