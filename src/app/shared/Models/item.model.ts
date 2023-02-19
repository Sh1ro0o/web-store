export class Item {
  public id: string;
  public name: string;
  public price: number;
  public description: string;
  public imgPath: string;
  public quantity: number;

  constructor(id: string, name: string, price: number, description: string, imgPath: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgPath = imgPath;
    this.quantity = quantity;
  }
}
