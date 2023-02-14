import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/shared/Models/item.model';
import { ItemComponent } from '../item/item.component';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  item: Item;

  //receiving data and storing it
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item, private matDialogRef: MatDialogRef<ItemComponent>) {
    this.item = data;
  }
}
