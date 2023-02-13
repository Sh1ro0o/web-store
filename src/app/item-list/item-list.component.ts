import { Component } from '@angular/core';
import { Item } from '../shared/item.model';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent {
  itemList: Item[] = [];

  constructor(private itemsService: ItemsService) {
    this.itemList = itemsService.getItems();
  }
}
