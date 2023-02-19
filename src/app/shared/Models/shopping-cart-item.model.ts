import { Item } from "./item.model";

export class ShoppingCartItem {
  private item: Item;
  private ammount: number;

  constructor(item: Item) {
    this.item = item;
    this.ammount = 1;
  }

  increaseAmmount(num: number): void {
    this.ammount += num;
  }

  decreaseAmmount(num: number): void {
    this.ammount -= num;
  }

  getAmmount(): number {
    return this.ammount;
  }

  getItem(): Item {
    return this.item;
  }
}
