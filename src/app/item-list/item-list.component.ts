import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/Models/item.model';
import { ItemsService } from '../shared/Services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
  itemList: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemList = this.itemsService.getItems();
  }
}
