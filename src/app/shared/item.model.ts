export class Item {
  public name: string;
  public price: number;
  public description: string;
  public imgPath: string;

  constructor(name: string, price: number, description: string, imgPath: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgPath = imgPath;
  }
}
