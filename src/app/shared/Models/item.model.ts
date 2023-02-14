export class Item {
  public id: string;
  public name: string;
  public price: number;
  public description: string;
  public imgPath: string;

  constructor(id: string, name: string, price: number, description: string, imgPath: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgPath = imgPath
  }
}
